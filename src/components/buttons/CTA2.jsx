import React from 'react'
import { useNavigate } from 'react-router';

const CTA2 = (props) => {
  const navigate=useNavigate();
  function handleClick(){
    navigate(props.path)
  }
  return (
      <button className={'bg-indigo-950 hover:bg-indigo-800 text-[20px] font-[Croissant_One] text-indigo-100 font-bold hover:scale-103 hover:-translate-y-1 transition-all rounded-[20px] shadow-[0_0_20px_black] h-auto w-auto min-w-75 min-h-9 px-5 py-3 '+props.className} onClick={handleClick}>{props.name}</button>
  )
}

export default CTA2
