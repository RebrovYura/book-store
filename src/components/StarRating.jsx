import { useState } from 'react'
import EmptyStar from '../assets/icons/EmptyStar.svg'
import FullStar from '../assets/icons/FullStar.svg'

const StarRating = ({ stars }) => {
  const [rating, setRating] = useState(stars)
  return (
    <div className='flex gap-x-[8px]'>
      {rating === 0
        ? <span className='text-[14px] text-label'>еще нет оценок</span>
        : [...Array(5)].map((star, index) => {
          index += 1
          return (
            <img src={index <= rating ? FullStar : EmptyStar} alt="star" key={index} onClick={() => setRating(index)} />
          )
        }
        )}
    </div>
  )
}

export default StarRating