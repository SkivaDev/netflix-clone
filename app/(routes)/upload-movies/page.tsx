import { Logo } from '@/components/shared/Logo'
import React from 'react'
import { NormalMovie } from './components/NormalMovie'
import { TrendingMovie } from './components/TrendingMovie'

function UploadMoviesPage() {
  return (
    <div className="bg-zinc-900 h-full flex flex-col justify-center items-center">
    <Logo />
    <h1 className="text-2xl my-8 font-semibold">
      Sube tus películas favoritas 🤟🏽
    </h1>
    <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
      <NormalMovie />
      <TrendingMovie />
    </div>
  </div>
  )
}

export default UploadMoviesPage