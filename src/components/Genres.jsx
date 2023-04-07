import { useState } from 'react'
import Arrow from '../assets/icons/Arrow.svg'
import { genresList } from '../constants/constants'
import { Link } from 'react-router-dom'


const Genres = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className='font-bold text-[18px] max-w-[255px]'>
      <div className='flex justify-between items-center mr-[16px] mb-[42px]' onClick={handleClick}>
        <p className={`${show ? 'text-accent transition-all' : 'text-text transition-all'}`}>Витрина книг</p>
        <img src={Arrow} alt='arrow' className={`${show ? 'rotate-180 transition-all' : 'rotate-0 transition-all'}`} />
      </div>
      {show &&
        <ul className='pl-[20px] mb-[42px] font-normal'>
          {
            genresList.map(item => (
              <li key={item} className='mb-[16px] text-[16px]'>{item}</li>
            ))
          }
        </ul>}
      <div className='mb-[42px]'>
        <a href="/rules">Правила пользования</a>
      </div>
      <div className='genres__inner-contract'>
        <a href="/contract">Договор оферты</a>
      </div>
    </div>
  )
}

export default Genres