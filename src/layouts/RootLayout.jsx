import React from 'react'
import Navbar from '../components/Navbar'
import Genres from '../components/Genres'

const RootLayout = ({children}) => {
  return (
    <div className='mt-[32px] mx-[16px] md:mx-[60px] xl:mx-auto max-w-[1110px] font-montserrat'>
        <Navbar/>
        <div className='hidden lg:block'>
            <Genres className=''/>
        </div>
    </div>
  )
}

export default RootLayout