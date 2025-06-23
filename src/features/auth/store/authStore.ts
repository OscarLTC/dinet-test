// src/features/auth/store/authStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { extractUserFromToken } from "@/shared/utils/jwtUtils";

export interface AuthState {
  token: string | null;
  expiration: string | null;
  user: ReturnType<typeof extractUserFromToken> | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  setAuth: (token: string, expiration: string) => void;
  clearAuth: () => void;
  setLoading: (l: boolean) => void;
  setError: (e: string | null) => void;
  validateSession: () => boolean;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  devtools(
    persist(
      immer((set, get) => ({
        token: null,
        expiration: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,

        setAuth: (token, expiration) =>
          set((state) => {
            state.token = token;
            state.expiration = expiration;
            state.user = extractUserFromToken(token);
            state.isAuthenticated = true;
            state.error = null;
          }),

        clearAuth: () =>
          set((state) => {
            state.token = null;
            state.expiration = null;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
          }),

        setLoading: (loading) =>
          set((state) => {
            state.isLoading = loading;
          }),

        setError: (error) =>
          set((state) => {
            state.error = error;
            state.isLoading = false;
          }),

        validateSession: () => {
          const { token, expiration } = get();
          if (!token || !expiration) {
            get().clearAuth();
            return false;
          }
          const now = new Date();
          if (new Date(expiration) < now) {
            get().clearAuth();
            return false;
          }
          set((state) => {
            state.user = extractUserFromToken(token);
          });
          return true;
        },
      })),
      {
        name: "auth-storage",
        partialize: (state) => ({
          token: state.token,
          expiration: state.expiration,
          isAuthenticated: state.isAuthenticated,
        }),
        onRehydrateStorage: () => (state) => {
          if (state) state.validateSession();
        },
      }
    )
  )
);
