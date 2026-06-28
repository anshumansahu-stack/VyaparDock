import React from 'react'
import { NavLink } from 'react-router'


const Navbutton = (props) => {
  
  return (
    <NavLink className={({isActive}) => isActive? 'font-[Braah_One] text-[20px] text-black bg-indigo-100 px-2 py-1 rounded-t-xl ' + props.className : 'font-[Braah_One] text-[20px] text-indigo-100 hover:text-slate-500 py-1 ' + props.className} to={props.path}>{props.name}</NavLink>
  )
}

export default Navbutton
