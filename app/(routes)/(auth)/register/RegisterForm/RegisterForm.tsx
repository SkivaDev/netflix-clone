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
import { useState } from "react";
import { formSchema } from "./RegisterForm.form";


export const RegisterForm = () => {

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
    const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values);
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
