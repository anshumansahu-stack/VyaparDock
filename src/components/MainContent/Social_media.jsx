import React from 'react'
import CTA from '../buttons/CTA'

const Social_media = () => {
    return (
        <div className='bg-red-300 flex flex-col justify-center items-center gap-5 h-40 w-80'>
            <p className='text-xl font-bold text-center'>Our Mini Social Media Highlights</p>
            <CTA name="Go to Social"></CTA>
        </div>
    )
}

export default Social_media
