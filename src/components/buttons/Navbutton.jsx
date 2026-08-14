import React from 'react'
import { NavLink } from 'react-router'


const Navbutton = (props) => {
  
  return (
    <NavLink 
  className={({ isActive }) => 
    isActive 
      ? `font-[Braah_One] text-[2.5vh] text-black bg-indigo-100 px-2 py-1 rounded-t-xl ${props.className}` 
      : `font-[Braah_One] text-[2.3vh] hover:scale-105 origin-bottom transition-all  text-indigo-100  py-1 px-2 rounded-t-xl hover:bg-indigo-100/20 ${props.className}`
  } 
  to={props.path}
>
  {props.name}
</NavLink>
  )
}

export default Navbutton
