import { z } from "zod";

export const clientSchema = z.object({
  name: z.string().min(1),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  mapUrl: z.string().url().optional(),
});
