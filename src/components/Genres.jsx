import { useState } from 'react'
import { genresList } from '../constants/constants'
import Arrow from '../assets/icons/Arrow.svg'
import books from '../constants/books.json'


const Genres = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  const onCategoryClick = (e) => {
    console.log(e.target.getAttribute('data-category'))
  }

  return (
    <div className='font-bold text-[18px] w-[255px]'>
      <div className='mb-[42px]'>
        <a href="/" >Главная</a>
      </div>
      <div className='flex justify-between items-center mr-[16px] mb-[42px] cursor-pointer' onClick={handleClick}>
        <p className={`${show ? 'text-accent transition-all' : 'text-text transition-all'}`}>Витрина книг</p>
        <img src={Arrow} alt='arrow' className={`${show ? 'rotate-180 transition-all' : 'rotate-0 transition-all'}`} />
      </div>
      {show &&
        <ul className='pl-[20px] mb-[42px] font-normal'>
          <li className='mb-[16px] text-[16px] cursor-pointer'>Все книги</li>
          {
            genresList.map(item => (
              <li key={item.name} className='mb-[16px] text-[16px] cursor-pointer realtive'>
                {item.name}
                <span key={item.name} className='text-label text-[14px] absolute ml-[5px]'>{item.amount}</span>
              </li>
            ))
          }
        </ul>}
      <div className='mb-[42px]'>
        <a href="/rules">Правила пользования</a>
      </div>
      <div>
        <a href="/contract">Договор оферты</a>
      </div>
    </div>
  )
}

export default Genres