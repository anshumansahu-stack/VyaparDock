import React from 'react'

const CTA2 = (props) => {
  return (
    <div>
      <button className={'bg-indigo-950 text-[20px] font-[Croissant_One] text-indigo-100 font-bold hover:text-slate-500 w-75 rounded-[20px] h-9 px-2 shadow-[0_0_20px_black]'+props.className}>{props.name}</button>
    </div>
  )
}

export default CTA2
