import React from 'react'
import Navbar from '../components/Navbar'
import Genres from '../components/Genres'
import Footer from '../components/Footer'

const RootLayout = ({ children }) => {
  return (
    <div className='pt-[32px] mx-[16px] md:mx-[60px] xl:mx-auto max-w-[1110px] font-montserrat h-full flex flex-col'>
      <Navbar />
      <div className='flex gap-x-[30px] grow'>
        <div className='hidden lg:block'>
          <Genres />
        </div>
        <div>
          {children}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default RootLayout