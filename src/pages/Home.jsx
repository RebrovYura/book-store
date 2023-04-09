import React from 'react'
import BookCard from '../components/BookCard'
import books from '../constants/books.json'

const Home = () => {
  return (
    <div className='flex flex-wrap gap-[13px] justify-center sm:justify-normal'>
      {/* {
        console.log(Object.keys(books).map(item => (books[item].item)))
      } */}
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  )
}

export default Home