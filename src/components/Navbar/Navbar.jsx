import { useState } from 'react'
import MobileMenu from '../MobileMenu/MobileMenu'
import './navbar.scss'
import Menu from '../../assets/icons/Menu.svg'
import Close from '../../assets/icons/Close.svg'
import ShoppingCart from '../../assets/icons/shoppingCart.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className='header'>
        <div className="header__inner">
          <div className="header__inner-left">
            <div className="mobile-menu">
              <img src={open ? Close : Menu} alt="" onClick={handleClick} />
            </div>
            <a href="/" className='header__inner-logo'>Logo</a>
            <a href="/" className='header__inner-name'>Библиотека</a>
          </div>
          <div className="header__inner-right">
            <img src={ShoppingCart} alt="" />
          </div>
        </div>
      </div>
      {open && <MobileMenu />}
    </>
  )
}

export default Navbar