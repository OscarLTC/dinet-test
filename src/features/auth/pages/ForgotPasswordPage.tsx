import { ForgotPasswordForm } from "../components/ForgotPasswordForm";
import { useRecovery } from "../hooks/useRecovery";

export const ForgotPasswordPage = () => {
  const { isEmailSent, isRecovering, clearRecovery, recoverPassword } =
    useRecovery();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
      {!isEmailSent && (
        <>
          <h2 className="text-3xl font-medium self-start text-dinet mb-2">
            Recuperar Contraseña
          </h2>
          <p className="text-muted-foreground text-xs mb-10">
            Ingresa tu correo electrónico y te enviaremos un enlace para
            restablecer tu contraseña.
          </p>
        </>
      )}
      <ForgotPasswordForm
        onSubmit={recoverPassword}
        clearRecovery={clearRecovery}
        isEmailSent={isEmailSent}
        isRecovering={isRecovering}
      />
    </div>
  );
};
