import React from 'react'
import BookCard from '../components/BookCard'

const Home = () => {
  return (
    <div className='flex flex-wrap gap-[13px] justify-center sm:justify-normal'>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
    </div>
  )
}

export default Home