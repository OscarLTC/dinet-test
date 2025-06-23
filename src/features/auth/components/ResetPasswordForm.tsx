import { useForm } from "react-hook-form";
import { PASSWORD_REQUIREMENTS } from "../constants/passwordRequirements";
import { ResetSuccessNotice } from "./reset-form/ResetSuccessNotice";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "../schemas/recovery.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Lock } from "lucide-react";

interface Props {
  onSubmit: (data: ResetPasswordFormData) => void;
  isResetSuccess: boolean;
  isResetting: boolean;
}

export const ResetPasswordForm = ({
  onSubmit,
  isResetSuccess,
  isResetting,
}: Props) => {
  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onBlur",
    defaultValues: { password: "", confirmPassword: "" },
  });

  const password = form.watch("password");

  const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
    text: req.text,
    met: req.test(password),
  }));

  if (isResetSuccess) {
    return <ResetSuccessNotice />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-7">
        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Nueva contraseña</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  showErrorIcon={true}
                  invalid={!!fieldState.error}
                />
              </FormControl>
              <FormMessage className="text-xs" />
              {password && (
                <div className="text-sm">
                  <small className="text-muted-foreground">
                    Requisitos de contraseña:
                  </small>
                  <ul className="list-none">
                    {requirements.map((r, i) => (
                      <li key={i} className="d-flex align-items-center">
                        <span
                          className={`me-2 ${
                            r.met ? "text-green-400" : "text-muted-foreground"
                          }`}
                        >
                          {r.met ? "✓" : "○"}
                        </span>
                        <small
                          className={
                            r.met ? "text-green-400" : "text-muted-foreground"
                          }
                        >
                          {r.text}
                        </small>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Nueva contraseña</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  showErrorIcon={true}
                  invalid={!!fieldState.error}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Button
          className="w-full bg-dinet hover:bg-dinet/80"
          type="submit"
          disabled={isResetting}
        >
          {isResetting ? (
            <LoaderCircle className="repeat-infinite animate-duration-1000 animate-spin-clockwise" />
          ) : (
            <Lock />
          )}
          Actualizar Contraseña
        </Button>
      </form>
    </Form>
  );
};
