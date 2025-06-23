import { apiClient } from "@/shared/api/apiClient";
import type { LoginRequest, LoginResponse } from "../types/auth.type";

const BASE_AUTH_URL = "/authentication/api/v1";

export const authService = {
  login: (credentials: LoginRequest) =>
    apiClient.post<LoginResponse>(`${BASE_AUTH_URL}/login`, credentials),

  logout: () => apiClient.post(`${BASE_AUTH_URL}/logout`),

  refreshToken: () => apiClient.post<LoginResponse>(`${BASE_AUTH_URL}/refresh`),

  validate: () => apiClient.get(`${BASE_AUTH_URL}/validate`),
};
