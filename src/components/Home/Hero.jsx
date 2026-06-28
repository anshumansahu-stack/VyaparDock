import React from 'react'
import CTA1 from '../buttons/CTA1'
import herobg from '../../assets/hero_bg.png'
const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='flex flex-col items-center rounded-[45px] justify-center h-115 px-30 pt-10 w-2/3 gap-25 mt-4'>
      <p style={{ textShadow: '3px 3px 4px black', WebkitTextStroke: '1px black'}} className='text-white font-[Sedgwick_Ave] font-bold text-[65px] text-center w-11/12'>Secure your spot in today's Corporate world!</p>
      <div className='flex justify-center gap-70'>
        <CTA1 name="Analyse my Resume →" className=" text-[23px]" path='/resume_o_meter'></CTA1>
        <CTA1 name="Make a Resume →" className=" text-[23px]" path='/create_resume'></CTA1>
      </div>
    </div>
  )
}

export default Hero

// linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)