import { useQuery } from "@tanstack/react-query";
import { recoveryService } from "../services/recoveryService";
import { useSearchParams } from "react-router";

export const useValidateRecoveryCode = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("codigo");
  console.log(code);
  return {
    ...useQuery({
      queryKey: ["validateCode", code],
      queryFn: () => recoveryService.validateCode(code!),
      enabled: !!code,
      retry: false,
    }),
    code,
  };
};
