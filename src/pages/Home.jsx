import { useEffect } from 'react'
import BookCard from '../components/BookCard'
import books from '../constants/books.json'

const Home = () => {

  const res = []
  const test = Object.keys(books).map(item => books[item])
  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < test[i].length; j++) {
      res.push(test[i][j])
    }
  }

  return (
    <div className='flex flex-wrap sm:justify-normal gap-x-[20px] gap-y-[10px] sm:justify-normal justify-center'>
      {
        res.map(item => (
          // console.log(typeof(item.image))
          <BookCard key={item.id} image={item.image} author={item.author} title={item.title} rating={item.rating} year={item.year} price='25 '/>
        ))
        
      }
      {/* <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard /> */}
    </div>
  )
}

export default Home