import { useState } from 'react'
import Arrow from '../../assets/icons/Arrow.svg'
import { genresList } from '../../constants/constants'
import './genres.scss'

const Genres = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className='genres'>
      <div className='genres__inner'>
        <div className="genres__inner-books" onClick={handleClick}>
          <p>Витрина книг</p>
          <img src={Arrow} alt="arrow" style={{ marginRight: '12px'}} />
        </div>
        {show &&
          <ul className='genres__list'>
            {
              genresList.map(item => (
                <li key={item} className='genres__list-item'>{item}</li>
              ))
            }
          </ul>
        }
        <div className='genres__inner-rules'>Правила пользования</div>
        <div className='genres__inner-contract'>Договор оферты</div>

      </div>
    </div>
  )
}

export default Genres