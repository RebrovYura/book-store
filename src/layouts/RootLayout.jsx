import React from 'react'
import Navbar from '../components/Navbar'

const RootLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default RootLayout