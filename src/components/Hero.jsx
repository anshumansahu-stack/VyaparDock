import React from 'react'
import CTA from './buttons/CTA'
const Hero = () => {
  return (
    <div style={{background: 'linear-gradient(90deg, #4C00FF 0%, #A8C0FF 100%)'}} className=' flex flex-col rounded-[45px] justify-between h-150 p-20 w-2/3 gap-20 mt-10'>
      <p className='text-white font-[Space_Grotesk] font-bold text-[75px] text-center'>Secure your spot in today's Corporate world!</p>
      <div className='flex justify-center gap-110'>
        <CTA name="Analyse my Resume →"></CTA>
        <CTA name="Make a Resume →"></CTA>
      </div>
    </div>
  )
}

export default Hero

// linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)