"use client";

import React from 'react'
import { NavbarFilmProps } from './NavbarFilm.types'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation';

export const NavbarFilm = (props: NavbarFilmProps) => {

    const { titleMovie } = props;
    const router = useRouter();
  
    const backToHome = () => {
      router.push("/");
    };

  return (
    <nav
      className="fixed flex gap-2 p-5 cursor-pointer items-center z-10 bg-zinc-900 w-full"
      onClick={backToHome}
    >
      <ArrowLeft className="w-6 h-6 rounded-full hover:bg-red-700 hover:text-black transition-all duration-300" />
      <p>
        Estás viendo: <span className="font-bold">{titleMovie}</span>
      </p>
    </nav>
  )
}
