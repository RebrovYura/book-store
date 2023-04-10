import React from 'react'
import StarRating from './StarRating'
import books from '../constants/books.json'
import book from '../assets/images/books/computer/comp1.png'
// import book from '../assets/images/books/computer/comp1.png'

const BookCard = ({ image, author, title, rating, year, price }) => {
    return (
        <div className='flex flex-col w-[280px] md:w-[190px] shadow-blockShadow p-[16px] rounded-[10px] cursor-pointer'>
            <div className='flex flex-col h-full'>
                <div className='max-h-[240px] w-full flex justify-center'>
                    <img src={book} alt="book" />
                </div>
                <div className='my-[16px]'>
                    <StarRating stars={rating} />
                </div>
                <p className='text-[14px] font-semibold leading-[18px] text-text w-full mb-[8px] flex items-center'>{title.length >= 20 ? title.slice(0, 35) + '...' : title}</p>
            </div>
            <span className='text-[12px] text-label mb-[8px]'>{author}, {year}</span>
            <span className='text-[18px] font-bold text-text mb-[8px]'>{price} BYN</span>
            <button className='py-[11px] rounded-[20px] bg-accent text-primary uppercase text-[12px] font-semibold hover:opacity-80 transition-opacity'>В корзину</button>
        </div>
    )
}

export default BookCard