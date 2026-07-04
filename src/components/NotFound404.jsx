import React from 'react'
import NotFoundImg from '../assets/404NF/404NotFound1.png'
const NotFound404 = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center font-[Braah_One] text-white text-[30px]'>
      <img src={NotFoundImg} alt="404 Not Found!" className='h-100'/>
      <p>Whoops...</p>
      <p> This page does not Exist!</p>
    </div>
  )
}

export default NotFound404