import { z } from "zod";

export const formSchema = z.object({
    email: z.string().email().min(3, {
        message: "Email must be at least 3 characters long",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }),
  });