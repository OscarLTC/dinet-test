import { CircleCheck } from "lucide-react";
import { Link } from "react-router";

export const ResetSuccessNotice = () => {
  return (
    <div className="p-4">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto">
          <div className="w-full h-full rounded-full bg-stone-100 flex items-center justify-center">
            <CircleCheck className="text-green-500" strokeWidth={2.5} />
          </div>
        </div>

        <div className="mt-4 px-2 text-gray-700">
          <h4 className="text-xl text-green-500 font-medium">
            ¡Contraseña Actualizada!
          </h4>
          <p className="mt-2 text-sm text-gray-700">
            Tu contraseña ha sido restablecida exitosamente.
            <br />
            <span className="font-medium text-gray-900">
              Ya puedes iniciar sesión con tu nueva contraseña.
            </span>
          </p>
        </div>

        <div className="mt-6">
          <Link
            to="/login"
            className="bg-dinet hover:bg-dinet/80 text-white text-sm font-medium px-4 py-2 rounded transition-colors duration-200"
          >
            Ir al login
          </Link>
        </div>
      </div>
    </div>
  );
};
