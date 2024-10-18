"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { formSchema } from "./RegisterForm.form";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";


export const RegisterForm = () => {

  const router = useRouter();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
        repeatPassword: "",
      },
    });
  
    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        await axios.post('/api/auth/register', values);

        toast({
          title: 'Usuario registrado correctamente'
        })

        router.push('/profile');
      } catch (error) {
        console.error(error);
        toast({
          title: 'Error al registrar el usuario',
          variant: 'destructive'
        })
      }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap-4 flex flex-col">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Correo electrónico" {...field} className="h-14 text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Contraseña" {...field} type="password" className="h-14 text-white"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Repite la contraseña" {...field} type="password" className="h-14 text-white"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormError error={error} /> */}
        <Button type="submit" className="w-full bg-[#E50914]">Registrarse</Button>
      </form>
    </Form>
  )
}
