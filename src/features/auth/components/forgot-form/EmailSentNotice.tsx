import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface Props {
  email: string;
  onRetry: () => void;
}

export const EmailSentNotice = ({ email, onRetry }: Props) => {
  return (
    <div className="p-4">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto">
          <div className="w-full h-full rounded-full bg-stone-100 flex items-center justify-center">
            <Mail className="text-dinet" strokeWidth={2.5} />
          </div>
        </div>

        <div className="mt-4 px-2 text-gray-700">
          <h4 className="text-xl font-medium">
            Verifica tu correo electrónico
          </h4>
          <p className="mt-2 text-sm text-gray-700">
            Le hemos enviado un correo electrónico de verificación a{" "}
            <span className="font-medium text-gray-900">{email}</span>, por
            favor revíselo
          </p>
        </div>

        <div className="mt-6">
          <Button
            className="bg-dinet hover:bg-dinet/80 text-white"
            onClick={onRetry}
          >
            Volver a intentar
          </Button>
        </div>
      </div>
    </div>
  );
};
