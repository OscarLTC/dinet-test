import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
    .max(50, "El nombre de usuario no puede exceder 50 caracteres")
    .regex(/^[a-zA-Z]+$/, "El nombre de usuario solo puede contener letras")
    .trim(),
  password: z
    .string()
    .min(4, "La contraseña debe tener al menos 4 caracteres")
    .max(100, "La contraseña no puede exceder 100 caracteres")
    .trim(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
