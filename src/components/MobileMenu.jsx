import React from 'react'
import Genres from './Genres'

const MobileMenu = () => {
  return (
    <>
      <div className='bg-menu w-[300px] rounded-[10px] pt-[32px] pl-[16px] pb-[52px] lg:hidden absolute top-[50px]'>
        <Genres />
        <div className='absolute h-[1px] w-full mt-[20px] left-0  bg-[#BFC4C9]' />
        <div className='font-bold text-[18px] mt-[42px]'>
          <p className='mb-[42px]'>Профиль</p>
          <p>Выход</p>
        </div>
      </div>
    </>
  )
}

export default MobileMenu