import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { recoveryService } from "../services/recoveryService";

export const useRecovery = () => {
  const recoverPassword = useMutation({
    mutationFn: recoveryService.recoverPassword,
    onSuccess: () => {
      toast.success(
        "Se ha enviado un correo con las instrucciones para recuperar tu contraseña"
      );
    },
    onError: (error: Error) => {
      if (import.meta.env.DEV)
        console.error("Error al solicitar recuperación de contraseña:", error);
      toast.error("Error al solicitar recuperación de contraseña");
    },
  });

  const validateCode = useMutation({
    mutationFn: recoveryService.validateCode,
    onError: (error: Error) => {
      if (import.meta.env.DEV) console.error("Error al validar código:", error);
      toast.error("El código es inválido o ha expirado");
    },
  });

  const resetPassword = useMutation({
    mutationFn: recoveryService.resetPassword,
    onSuccess: () => {
      toast.success(
        "Contraseña actualizada exitosamente. Ya puedes iniciar sesión con tu nueva contraseña"
      );
    },
    onError: (error: Error) => {
      if (import.meta.env.DEV)
        console.error("Error al resetear contraseña:", error);
      toast.error("Error al actualizar la contraseña");
    },
  });

  return {
    recoverPassword: recoverPassword.mutate,
    validateCode: validateCode.mutate,
    resetPassword: resetPassword.mutate,

    isRecovering: recoverPassword.isPending,
    isValidating: validateCode.isPending,
    isResetting: resetPassword.isPending,

    errorRecoverPassword: recoverPassword.error,
    errorValidateCode: validateCode.error,
    errorResetPassword: resetPassword.error,

    isEmailSent: recoverPassword.isSuccess,
    clearRecovery: recoverPassword.reset,

    isResetSuccess: resetPassword.isSuccess,
    clearReset: resetPassword.reset,
  };
};
