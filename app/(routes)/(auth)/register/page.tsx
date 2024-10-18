import Link from 'next/link'
import React from 'react'
import { Terms } from '../components/Terms'

const RegisterPage = () => {
  return (
    <div>
        <p className="text-3xl font-bold text-left mb-7">Registro de usuario</p>

        <p>Register form..</p>

        <div className='mt-4 flex gap-1'>
            <p className="text-white opacity-70">¿Ya tienes cuenta?</p>
            <Link href="/login" className='opacity-[1] text-white'>Inicia sesión aqui</Link>
        </div>

        <Terms />
    </div>
  )
}

export default RegisterPage