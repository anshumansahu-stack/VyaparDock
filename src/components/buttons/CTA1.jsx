import React from 'react'
import { useNavigate } from 'react-router'

const CTA1 = (props) => {
  const navigate=useNavigate()
  function handleClick(){
    navigate(props.path)
  }
  return (
      <button  className={'bg-indigo-950 text-xl font-[Croissant_One] text-indigo-100 font-bold hover:text-slate-500 rounded-[20px] w-80 h-15 px-2 shadow-[0_0_20px_black] '+props.className} onClick={handleClick}>{props.name}</button>
  )
}

export default CTA1
