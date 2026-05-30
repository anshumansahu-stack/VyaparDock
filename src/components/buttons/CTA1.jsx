import React from 'react'

const CTA = (props) => {
  return (
      <button  className='bg-blue-600 text-xl font-[Croissant_One] text-indigo-100 text-[20px] font-bold hover:text-fuchsia-600 rounded-[20px] w-70 h-15 px-2 shadow-[0_0_20px_black]'>{props.name}</button>
  )
}

export default CTA
