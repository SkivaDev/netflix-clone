"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./LoginForm.form";
import { useState } from "react";
import { FormError } from "./FormError";
import { login } from "@/actions/login";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";



export const LoginForm = () => {

  const route = useRouter();

  const [error, setError] = useState<string | undefined>("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      login(values).then((data) => {
        setError(data?.error)
        if(data?.success) {
          toast({
            title: 'Inicio de sesión exitoso',
          })
        }
      })
      route.push('/')
    } catch (error) {
      console.log(error);
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
        <FormError error={error} />
        <Button type="submit" className="w-full bg-[#E50914]">Iniciar Sesión</Button>
      </form>
    </Form>
  );
};
