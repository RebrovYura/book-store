import { useState } from 'react'
import MobileMenu from './MobileMenu'

import Menu from '../assets/icons/Menu.svg'
import Close from '../assets/icons/Close.svg'
import Logo from '../assets/icons/logo.svg'
import ShoppingCart from '../assets/icons/shoppingCart.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className='mb-[20px] lg:mb-[62px] relative'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-[20px] lg:gap-x-[250px]'>
            <div className='block lg:hidden max-w-[24px]'>
              <img src={open ? Close : Menu} alt="menu" onClick={handleClick} />
            </div>
            <a href="/" className='hidden lg:block'><img src={Logo} alt="logo" /></a>
            <a href="/" className='text-[18px] font-bold md:text-[32px]'>Библиотека</a>
          </div>
          <div className="header__inner-right max-w-[24px] md:max-w-[32px]">
            <img src={ShoppingCart} alt="cart" />
          </div>
        </div>
        {open && <MobileMenu />}
      </div>
    </>
  )
}

export default Navbar