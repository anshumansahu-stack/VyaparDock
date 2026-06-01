import React from 'react'
import CTA1 from '../buttons/CTA1'
import BOOMAIIMG from '../../assets/BOOMAI.jpg'
const BOOMAI = () => {
  return (
    <div style={{backgroundImage: `url(${BOOMAIIMG})`,backgroundSize: 'cover',backgroundPosition:'center'}} className=' flex flex-col justify-center items-center gap-5 h-full w-1/5 rounded-[15px]'>
      <p style={{ textShadow: '3px 3px 4px black' }} className='text-[60px] font-bold text-center text-white font-[Lobster_Two]'>Need Advice?</p>
        <CTA1 name="Talk to BOOMAI →"></CTA1>
    </div>
  )
}

export default BOOMAI
