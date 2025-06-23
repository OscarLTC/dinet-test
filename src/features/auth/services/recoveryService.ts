import { apiClient } from "@/shared/api/apiClient";
import type {
  RecoverPasswordRequest,
  ResetPasswordRequest,
} from "../types/recovery.type";

export const recoveryService = {
  recoverPassword: (data: RecoverPasswordRequest) =>
    apiClient.post("/authentication/api/v1/recover-password", data),

  validateCode: (code: string) =>
    apiClient.post("/authentication/api/v1/validate-code", { code }),

  resetPassword: async (data: ResetPasswordRequest) => {
    const newData = {
      code: data.code,
      new_password: data.password,
      confirm_new_password: data.confirmPassword,
    };
    await apiClient.post("/authentication/api/v1/reset-password", newData);
  },
};
