import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
      <h2 className="text-3xl font-medium self-start text-gray-700 mb-12">
        Iniciar Sesión
      </h2>

      <LoginForm />
    </div>
  );
};
