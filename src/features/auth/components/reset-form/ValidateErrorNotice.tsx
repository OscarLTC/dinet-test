import { CircleAlert } from "lucide-react";
import { Link } from "react-router";

export const ValidateErrorNotice = () => {
  return (
    <div className="p-4">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto">
          <div className="w-full h-full rounded-full bg-stone-100 flex items-center justify-center">
            <CircleAlert className="text-red-400" strokeWidth={2.5} />
          </div>
        </div>

        <div className="mt-4 px-2 text-gray-700">
          <h4 className="text-xl text-red-400 font-medium">Enlace Inválido</h4>
          <p className="mt-2 text-xs text-gray-700">
            El enlace de recuperación es inválido o ha expirado. Por favor,
            <br />
            <span className="font-medium text-gray-900">
              solicita un nuevo enlace de recuperación de contraseña.
            </span>
          </p>
        </div>

        <div className="mt-6">
          <Link
            to="/forgot-password"
            className="bg-red-400 hover:bg-red-400/80 text-white text-sm font-medium px-4 py-2 rounded transition-colors duration-200"
          >
            Volver a intentar
          </Link>
        </div>
      </div>
    </div>
  );
};
