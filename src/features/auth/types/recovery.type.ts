export interface RecoverPasswordRequest {
  email: string;
}

export interface ValidateCodeRequest {
  code: string;
}

export interface ResetPasswordRequest {
  code: string;
  password: string;
  confirmPassword: string;
}
