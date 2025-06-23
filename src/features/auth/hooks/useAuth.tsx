import { useAuthStore } from "../store/authStore";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/authService";
import { toast } from "react-toastify";
import type { LoginRequest } from "../types/auth.type";
import { extractUserFromToken } from "@/shared/utils/jwtUtils";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const navigate = useNavigate();
  const { setAuth, clearAuth, setLoading, setError, expiration } =
    useAuthStore();

  const login = useMutation({
    mutationFn: (credentials: LoginRequest) => authService.login(credentials),
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: ({ data }) => {
      const { token } = data;
      const user = extractUserFromToken(token);

      setAuth(token, expiration ?? "");
      toast.success(
        `¡Bienvenido ${user.username}! Has iniciado sesión correctamente`
      );
      navigate("/entregas/listar");
    },
    onError: (err: Error) => {
      setError(err.message);
      toast.error(err.message);
    },
    onSettled: () => setLoading(false),
  });

  const logout = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      clearAuth();
      navigate("/login");
      toast.success("Has cerrado sesión correctamente");
    },
    onError: () => {
      clearAuth();
      navigate("/login");
    },
  });

  const validateToken = useMutation({
    mutationFn: () =>
      authService
        .validate()
        .then(() => true)
        .catch(() => false),
    onError: () => clearAuth(),
  });

  return {
    login: login.mutate,
    logout: logout.mutate,
    validateToken: validateToken.mutate,

    isLoggingIn: login.isPending,
    isLoggingOut: logout.isPending,

    error: useAuthStore((s) => s.error),
    isAuthenticated: useAuthStore((s) => !!s.token),
  };
};
