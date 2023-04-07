import { useState } from 'react'
import EmptyStar from '../assets/icons/EmptyStar.svg'
import FullStar from '../assets/icons/FullStar.svg'

const StarRating = () => {
  const [rating, setRating] = useState(0)
  return (
    <div className='flex gap-x-[8px]'>
      {[...Array(5)].map((star, index) => {
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