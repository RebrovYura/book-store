import React from 'react'
import StarRating from './StarRating'
import book from '../assets/images/book.png'

const BookCard = () => {
    return (
        <div className='flex flex-col max-w-[280px] md:max-w-[190px] shadow-blockShadow p-[16px] rounded-[10px] cursor-pointer'>
            <div className='max-h-[240px] w-full flex justify-center'>
                <img src={book} alt="book" />
            </div>
            <div className='my-[16px]'>
                <StarRating />
            </div>
            <p className='text-[14px] font-semibold leading-[18px] text-text w-full mb-[8px]'>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытству...</p>
            <span className='text-[12px] text-label mb-[8px]'>Адитья Бхаргава, 2019</span>
            <span className='text-[18px] font-bold text-text mb-[8px]'>25,35 BYN</span>
            <button className='py-[11px] rounded-[20px] bg-accent text-primary uppercase text-[12px] font-semibold hover:opacity-80 transition-opacity'>В корзину</button>
        </div>
    )
}

export default BookCard