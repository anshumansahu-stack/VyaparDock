import React from 'react'
import CTA from '../buttons/CTA'
const CreateResume = () => {
    return (
        <div className='bg-purple-300 flex flex-col justify-center items-center h-40 w-80 gap-5'>
            <p className='text-xl font-bold text-center'>Short on Time? Make a resume Now!</p>
            <CTA name="Create a Resume"></CTA>
        </div>
    )
}

export default CreateResume
