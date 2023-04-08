import React from 'react'
import facebook from '../assets/icons/Facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import vk from '../assets/icons/vk.svg'
import linkedin from '../assets/icons/linkedin.svg'

const Footer = () => {
    return (
        <div className='mt-[62px] py-[16px] border-t border-label'>
            <div className='flex justify-between items-center'>
                <p>
                    Book store | Yuri Rebrov
                </p>
                <div className='flex gap-x-[24px]'>
                    <a href="#"><img src={facebook} alt="facebook" /></a>
                    <a href="#"><img src={instagram} alt="instagram" /></a>
                    <a href="#"><img src={vk} alt="vk" /></a>
                    <a href="#"><img src={linkedin} alt="linkedin" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer