import { object, string} from "zod";
import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


export const signUpSchema = object({
  email: string()
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
  confirmPassword: z.string().min(1,"Required" ),
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
export const packageSchema = object({
  name: string().min(1,"Package name is required"),
  amount: string().min(1,"Amount is required"),
  description: string().min(1,"Description is required"),
});

export const eventSchema = object({
  coverPhoto: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png, and .webp formats are supported."
    ).optional(),
  albumPhotos: z
    .array(
      z.any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB per photo.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png, and .webp formats are supported for album photos."
      )
    ).optional(),
  name: string().min(1, "Event name is required"),
  description: string().min(1,"Description is required"),
  category: string().min(1,"Category is required"),
  // Add other fields here as needed
  // address: string().min(1,"Address is required"),
  city: string().min(1,"City is required"),
  // state: string().min(1,"State/Province is required"),
  // country: string().min(1,"Country/Region is required"),
  // timeZone: string().min(1,"Time Zone is required"),
  eventDate: string().min(1,"Event Date is required"),
  startTime: string().min(1,"Start Time is required"),
  // packages: z.array(packageSchema).min(1,"At least one package is required"),
  // promotionTick: z.boolean(),
});