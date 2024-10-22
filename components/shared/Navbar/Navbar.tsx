import React from 'react'
import { NavbarMobile } from './NavbarMobile'
import { NavbarDesktop } from './NavbarDesktop'
import { NavbarProps } from './Navbar.types'

export const Navbar = (props: NavbarProps) => {

  const { users } = props;

  return (
    <nav>
        <div className='hidden mx-auto md:block'>
            <NavbarDesktop users={users}/>
        </div>
        <div className='md:hidden'>
            <NavbarMobile />
        </div>
    </nav>
  )
}
