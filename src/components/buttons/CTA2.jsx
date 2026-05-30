import React from 'react'

const CTA = (props) => {
  return (
    <div>
      <button className='bg-blue-600 text-[15px] font-[Croissant_One] text-indigo-100 font-bold hover:text-fuchsia-600 rounded-[20px] w-75 h-9 px-2 shadow-[0_0_20px_black]'>{props.name}</button>
    </div>
  )
}

export default CTA
