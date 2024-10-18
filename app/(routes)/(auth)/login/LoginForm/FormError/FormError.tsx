import React from 'react'
import { FormErrorProps } from './FormError.types'
import { TriangleAlert } from 'lucide-react'


export const FormError = (props: FormErrorProps) => {

    const { error } = props

    if(!error) return null

  return (
    <div className='bg-destructive/50 p-3 rounded-md flex items-center gap-x-2 text-sm text-white'>
        <TriangleAlert size={24} className="text-white" />
        <p className="text-white text-sm">{error}</p>
    </div>
  )
}
