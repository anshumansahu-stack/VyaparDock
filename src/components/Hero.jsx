import React from 'react'
import CTA from './buttons/CTA'
const Hero = () => {
  return (
    <div className='bg-blue-700 flex flex-col justify-between h-25 p-2.75 '>
      <p className='text-white font-bold text-3xl text-center'>Secure your spot in today's Corporate world!</p>
      <div className='flex justify-between'>
        <CTA name="Analyse my Resume"></CTA>
        <CTA name="Make a Resume"></CTA>
      </div>
    </div>
  )
}

export default Hero
