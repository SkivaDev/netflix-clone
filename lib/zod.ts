import { object, string } from "zod";

export const signInSchema = object({
    email: string({ required_error: "Email is required" }).email("Invalid email").min(3, {
        message: "Email must be at least 3 characters long",
    }),
    password: string({ required_error: "Password is required" }).min(6, {
        message: "Password must be at least 6 characters long",
    })
});