import * as React from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  showPasswordToggle?: boolean;
  showErrorIcon?: boolean;
  invalid?: boolean;
}

function Input({
  className,
  type,
  showPasswordToggle = true,
  showErrorIcon = true,
  invalid = false,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const isPasswordType = type === "password";
  const shouldShowToggle = isPasswordType && showPasswordToggle;
  const shouldShowErrorIcon = invalid && showErrorIcon;
  const inputType = isPasswordType && showPassword ? "text" : type;

  // Calcular el padding derecho basado en los iconos que se muestran
  const getRightPadding = () => {
    if (shouldShowToggle && shouldShowErrorIcon) return "pr-16"; // Ambos iconos
    if (shouldShowToggle || shouldShowErrorIcon) return "pr-10"; // Un icono
    return ""; // Sin iconos
  };

  return (
    <div className="relative">
      <input
        type={inputType}
        data-slot="input"
        aria-invalid={invalid}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded border bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          getRightPadding(),
          className
        )}
        {...props}
      />

      {/* Icono de error */}
      {shouldShowErrorIcon && (
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 text-destructive pointer-events-none",
            shouldShowToggle ? "right-10" : "right-3"
          )}
        >
          <AlertCircle className="h-4 w-4" />
        </div>
      )}

      {/* Toggle de contraseña */}
      {shouldShowToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          tabIndex={-1}
          aria-label={
            showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
          }
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  );
}

export { Input };
