import React from 'react'
import microsoftImg from '../../assets/microsoft.jpeg'

const Jobupdates = () => {
  return (
    <div style={{backgroundImage: `url(${microsoftImg})`,backgroundSize: 'cover',backgroundPosition:'center'}} className=" flex justify-center items-end w-3/5 px-13 py-6 rounded-[15px]">
      <span style={{textShadow: '2px 2px 4px black'}} className="text-white font-[Noto_Sans_Khmer] text-[21px]"> <b>Microsoft</b> is making a massive, multi-billion dollar investment in cloud and AI infrastructure in India. This includes massive hyperscale data centers in regions like Hyderabad and other major hubs to support local data protection regulations.</span>
    </div>
  )
}

export default Jobupdates
