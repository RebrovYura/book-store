import { useEffect } from 'react'
import BookCard from '../components/BookCard'
import books from '../constants/books.json'
import service from '../services/service'

const Home = () => {

  const jsonService = new service()

  return (
    <div className='flex flex-wrap sm:justify-normal gap-x-[20px] gap-y-[10px] sm:justify-normal justify-center'>
      {
        jsonService.getAllBooks().map(item => (
          <BookCard key={item.id} image={item.image} author={item.author} title={item.title} rating={item.rating} year={item.year} price='25 ' />
        ))
      }
    </div>
  )
}

export default Home