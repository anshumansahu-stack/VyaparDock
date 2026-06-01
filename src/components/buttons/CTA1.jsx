import React from 'react'

const CTA1 = (props) => {
  return (
      <button  className={'bg-indigo-950 text-xl font-[Croissant_One] text-indigo-100 text-[25px] font-bold hover:text-slate-500 rounded-[20px] w-80 h-15 px-2 shadow-[0_0_20px_black]'+props.className}>{props.name}</button>
  )
}

export default CTA1
