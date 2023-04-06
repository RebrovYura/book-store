import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './layout.scss'

const RootLayout = ({children}) => {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='layout__content'>
            {children}
        </div>
    </div>
  )
}

export default RootLayout