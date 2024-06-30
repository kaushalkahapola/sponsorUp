import { z } from "zod";

export const eventModel = z.object({
  //id is alphanumeic
  id: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/)
    .optional(),
  title: z.string(),
  description: z.string(),
  datetime: z.string().datetime(),
  location: z.string(),
  //organizer is ref from users
  organizerRef: z.string(),
  coverImage: z.string().url().optional(),
  //album is array of urlss
  album: z.array(z.string().url()).max(10).optional(),
  category: z.string(),
});

// Define schema for eventId validation
export const idModel = z.string().regex(/^[a-zA-Z0-9]+$/, {
  message: "Event ID must be alphanumeric",
});
