import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "../schemas/recovery.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { ArrowLeft, LoaderCircle, Mail } from "lucide-react";
import { EmailSentNotice } from "./forgot-form/EmailSentNotice";

interface Props {
  onSubmit: (data: ForgotPasswordFormData) => void;
  isRecovering: boolean;
  isEmailSent: boolean;
  clearRecovery: () => void;
}

export const ForgotPasswordForm = ({
  onSubmit,
  isRecovering,
  isEmailSent,
  clearRecovery,
}: Props) => {
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const emailValue = form.watch("email");

  const onRetry = () => {
    clearRecovery();
    form.reset({ email: "" });
    form.setFocus("email");
  };

  if (isEmailSent) {
    return <EmailSentNotice email={emailValue} onRetry={onRetry} />;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-10"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  showErrorIcon={true}
                  placeholder="ejemplo@correo.com"
                  invalid={!!fieldState.error}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full text-base py-5 bg-dinet hover:bg-dinet/80"
        >
          {isRecovering ? (
            <LoaderCircle className="repeat-infinite animate-duration-1000 animate-spin-clockwise" />
          ) : (
            <Mail strokeWidth={3} />
          )}
          Enviar enlace de recuperación
        </Button>
        <Link
          to={"/login"}
          className="flex items-center gap-1 justify-center text-xs text-dinet"
        >
          <ArrowLeft size={16} />
          Regresar al login
        </Link>
      </form>
    </Form>
  );
};
