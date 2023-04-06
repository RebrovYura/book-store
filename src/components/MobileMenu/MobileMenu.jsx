import React from 'react'
import Genres from '../Genres/Genres'
import './mobileMenu.scss'

const MobileMenu = () => {
  return (
    <div className='menu'>
      <div className="menu__inner">
        <Genres/>
        
      </div>
    </div>
  )
}

export default MobileMenu