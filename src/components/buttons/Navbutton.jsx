import React from 'react'

const Navbutton = (props) => {
  return (
    <button className={'font-[Braah_One] text-[22px] text-indigo-100 hover:text-slate-500 ' + props.className}>{props.name}</button>
  )
}

export default Navbutton
