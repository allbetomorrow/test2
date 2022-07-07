import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  username: z.string()
})

export const loginSchema = z.object({
  username: z.string().min(4, "At least 4 ch"),
  password: z.string().min(4, "At least 4 ch")
})
