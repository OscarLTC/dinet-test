import { jwtDecode } from "jwt-decode";

export interface JwtPayload {
  token_type: string;
  role_id: number;
  sub: string; // username en payload
  jti: string;
  iss: string;
  aud: string[];
  exp: number;
}

export const decodeJwt = (token: string): JwtPayload | null => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
};

export const extractUserFromToken = (token: string) => {
  const decoded = decodeJwt(token);

  return decoded
    ? { username: decoded.sub, role_id: decoded.role_id }
    : { username: "Usuario" };
};

export const getTokenExpDate = (token: string): Date | null => {
  const decoded = decodeJwt(token);
  return decoded ? new Date(decoded.exp * 1000) : null;
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeJwt(token);
  return !decoded || decoded.exp * 1000 < Date.now();
};
