import React from 'react'
import { useNavigate } from 'react-router';

const CTA2 = (props) => {
  const navigate=useNavigate();
  function handleClick(){
    navigate(props.path)
  }
  return (
      <button className={'bg-indigo-950 text-[20px] font-[Croissant_One] text-indigo-100 font-bold hover:text-slate-500 w-75 rounded-[20px] h-9 px-2 shadow-[0_0_20px_black] '+props.className} onClick={handleClick}>{props.name}</button>
  )
}

export default CTA2
