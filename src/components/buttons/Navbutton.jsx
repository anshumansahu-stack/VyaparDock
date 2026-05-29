import React from 'react'

const Navbutton = (props) => {
  return (
    <div >
      <button className='font-[Quicksand] text-[21.5px] font-bold text-indigo-100 hover:text-indigo-600'>{props.name}</button>
    </div>
  )
}

export default Navbutton
