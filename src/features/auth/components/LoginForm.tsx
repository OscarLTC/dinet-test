import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormData } from "../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
export const LoginForm = () => {
  const { login, isLoggingIn } = useAuth();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-7">
        <FormField
          control={form.control}
          name="username"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  showErrorIcon={true}
                  invalid={!!fieldState.error}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  showErrorIcon={true}
                  invalid={!!fieldState.error}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Link
          to={"/forgot-password"}
          className="block text-xs text-end text-dinet"
        >
          ¿Olvidaste tu contraseña?
        </Link>
        <Button
          type="submit"
          className="w-full text-base py-5 bg-dinet hover:bg-dinet/80"
        >
          {isLoggingIn ? (
            <span className="animate-pulse">Iniciando sesión...</span>
          ) : (
            "Iniciar sesión"
          )}
        </Button>
      </form>
    </Form>
  );
};
