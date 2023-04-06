import React from 'react'

import './mobileMenu.scss'

const MobileMenu = () => {
  return (
    <div className='menu'>
      <div className="menu__inner">
        <div className='menu__inner-books'>
          <p>Витрина книг</p>
        </div>
        <div className='menu__inner-rules'>
          <p>Правила пользования</p>
        </div>
        <div className='menu__inner-contract'>
          <p>Договор оферты</p>
        </div>
        
      </div>
    </div>
  )
}

export default MobileMenu