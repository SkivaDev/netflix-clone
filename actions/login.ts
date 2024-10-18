"use server";

import { signIn } from "@/auth";
import { signInSchema } from "@/lib/zod";
import { AuthError } from "next-auth";
import {z} from 'zod';


export const login = async (values: z.infer<typeof signInSchema>) => { // 

    const validatedFields = signInSchema.safeParse(values); 

    console.log(validatedFields);

    if(!validatedFields.success) return {error: 'Invalid fields'};

    const { email, password } = validatedFields.data;

    try {
        
        await signIn('credentials', {
            email,
            password,
            redirectTo: '/profiles'
        });

        return {success: true};

    } catch (error) {

        console.log(error);

        if(error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {error: 'Invalid credentials'};
                default:
                    return {error: 'An error occurred'};
            }
        }

    }

}