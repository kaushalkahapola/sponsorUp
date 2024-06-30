import { object, string } from "zod";
import { z } from "zod";

export const signUpSchema = object({
  email: string()
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
  confirmPassword: z.string().nonempty({ message: "Required" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const signInSchema = object({
  email: string()
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters"),
  password: string().min(8, "Password must be at least 8 characters"),
});

//after 20 char
// .regex(
//   /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//   "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character"
// ),
