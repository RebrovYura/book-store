import React from 'react'
import Search from '../assets/icons/Search.svg'

const SearchBar = () => {
  return (
    <div className='relative pb-[32px]'>
        <img src={Search} alt="search" className='absolute top-[15px] left-[13px]'/>
        <input type="text" name="" id="" placeholder='Поиск книги или автора...' className='w-[300px] md:w-[350px] shadow-blockShadow rounded-[599px] py-[10px] pl-[40px] text-[18px] text-label border-none'/>
    </div>
  )
}

export default SearchBar