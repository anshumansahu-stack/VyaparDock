import React from 'react'
import CTA2 from '../buttons/CTA2'
import resumebg from '../../assets/resume_review.jpg'

const Social_media = () => {
    return (
        <div style={{ backgroundImage: `url(${resumebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=' flex flex-col justify-center items-center gap-5 h-1/2 w-full rounded-[15px]'>
            <p style={{ textShadow: '2px 2px 4px black' }} className='text-[35px] font-bold text-center text-white font-[Lobster_Two]'>Not Confident in your Resume?</p>
            <CTA2 className=' w-105!' name="Get Reviews from our Members →"></CTA2>
        </div>
    )
}

export default Social_media
