import React from 'react'
import CTA2 from '../buttons/CTA2'
import resumemakebg from '../../assets/resume_making.jpg'
const CreateResume = () => {
    return (
        <div style={{ backgroundImage: `url(${resumemakebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  className='bg-purple-300 flex flex-col justify-center items-center h-1/2 w-full gap-5 rounded-[15px]'>
            <p style={{ textShadow: '2px 2px 4px black' }} className='text-[35px] font-bold text-center text-white font-[Lobster_Two]'>Short on Time? Make a resume Now!</p>
            <CTA2 name="Create a Resume →"></CTA2>
        </div>
    )
}

export default CreateResume
