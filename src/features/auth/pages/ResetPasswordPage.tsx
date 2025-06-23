import { LoaderCircle } from "lucide-react";
import { ValidateErrorNotice } from "../components/reset-form/ValidateErrorNotice";
import { ResetPasswordForm } from "../components/ResetPasswordForm";
import { useRecovery } from "../hooks/useRecovery";
import { useValidateRecoveryCode } from "../hooks/useValidateRecoveryCode";
import type { ResetPasswordFormData } from "../schemas/recovery.schema";

export const ResetPasswordPage = () => {
  const { isLoading, isError, code } = useValidateRecoveryCode();
  const { isResetting, isResetSuccess, resetPassword } = useRecovery();

  if (isLoading) {
    return (
      <div className="text-center h-full flex flex-col justify-center items-center">
        <LoaderCircle
          size={20}
          strokeWidth={3}
          className="repeat-infinite animate-duration-1000 animate-spin-clockwise text-dinet mb-2"
        />
        <h3 className="text-xl font-semibold text-muted-foreground">
          Validando enlace...
        </h3>
        <p className="text-xs text-muted-foreground">
          Por favor espera mientras verificamos tu enlace de recuperación.
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center h-full flex flex-col justify-center items-center">
        <ValidateErrorNotice />
      </div>
    );
  }

  const onSubmit = async (data: ResetPasswordFormData) => {
    if (!code) {
      return;
    }
    resetPassword({
      code,
      ...data,
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
      {!isResetSuccess && (
        <div className="self-start ">
          <h2 className="text-3xl font-medium text-dinet mb-2">
            Restablecer Contraseña
          </h2>
          <p className="text-muted-foreground text-xs mb-10">
            Ingresa tu nueva contraseña. Asegúrate de que sea segura y fácil de
            recordar.
          </p>
        </div>
      )}
      <ResetPasswordForm
        onSubmit={onSubmit}
        isResetting={isResetting}
        isResetSuccess={isResetSuccess}
      />
    </div>
  );
};
