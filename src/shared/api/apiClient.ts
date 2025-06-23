/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { differenceInSeconds, parseISO } from "date-fns";
import { useAuthStore } from "@/features/auth/store/authStore";
import type { ApiErrorResponse } from "../types/api.type";
import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosRequestHeaders,
} from "axios";
import { authService } from "@/features/auth/services/authService";

const createApiClient = (baseURL: string, timeout = 30000) => {
  const instance: AxiosInstance = axios.create({ baseURL, timeout });
  let isRefreshing = false;
  const queue: Array<{
    onSuccess: (token: string) => void;
    onFailure: (err: any) => void;
  }> = [];

  const processQueue = (error: any, token?: string) => {
    queue.forEach(({ onSuccess, onFailure }) => {
      error ? onFailure(error) : onSuccess(token!);
    });
    queue.length = 0;
  };

  instance.interceptors.request.use(
    async (config) => {
      const { token, expiration } = useAuthStore.getState();
      if (token) {
        if (
          expiration &&
          differenceInSeconds(parseISO(expiration), new Date()) <= 0
        ) {
          console.warn(
            "Token expirado, dejar que el interceptor de respuesta lo maneje"
          );
        } else {
          if (!config.headers) {
            config.headers = {} as AxiosRequestHeaders;
          }
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Manejo de respuestas
  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as AxiosRequestConfig & {
        _retry?: boolean;
      };
      const status = error.response?.status;

      // 401 -> refrescar token
      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            queue.push({
              onSuccess: (token) => {
                originalRequest.headers!["Authorization"] = `Bearer ${token}`;
                resolve(instance(originalRequest));
              },
              onFailure: (err) => reject(err),
            });
          });
        }

        isRefreshing = true;
        try {
          const res = await authService.refreshToken();
          const { token, expiration } = res.data;
          useAuthStore.getState().setAuth(token, expiration);
          processQueue(null, token);

          originalRequest.headers!["Authorization"] = `Bearer ${token}`;
          return instance(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError);
          useAuthStore.getState().clearAuth();
          window.location.replace("/login");
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      if (!navigator.onLine) {
        return Promise.reject(new Error("Sin conexión a Internet."));
      }

      if (error.code === "ECONNABORTED") {
        return Promise.reject(new Error("Tiempo de espera agotado."));
      }

      if (error.request && !error.response) {
        return Promise.reject(new Error("No se pudo contactar al servidor."));
      }

      if (error.response?.data) {
        try {
          const parsed = error.response.data as ApiErrorResponse;
          return Promise.reject(new Error(parsed.error.error_message));
        } catch {
          return Promise.reject(
            new Error(`Error ${status}: ${error.response?.statusText}`)
          );
        }
      }

      return Promise.reject(
        new Error(
          "No se pudo contactar al servidor. Intenta de nuevo más tarde."
        )
      );
    }
  );

  return {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
      instance.get<T>(url, config).then((res) => res.data),
    post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
      instance.post<T>(url, data, config).then((res) => res.data),
    put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
      instance.put<T>(url, data, config).then((res) => res.data),
    patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
      instance.patch<T>(url, data, config).then((res) => res.data),
    delete: <T>(url: string, config?: AxiosRequestConfig) =>
      instance.delete<T>(url, config).then((res) => res.data),
  };
};

export const apiClient = createApiClient(import.meta.env.VITE_APIGATEWAY_URL);
