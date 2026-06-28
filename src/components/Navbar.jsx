import React from 'react'

import Navbutton from './buttons/Navbutton.jsx'

const Navbar = () => {

  return (
    <div className='backdrop-blur-md bg-black/50 w-full h-20 flex flex-row justify-between items-end rounded-b-[15px]'>
      <p className=" font-['Freeman'] font-bold text-[43px] text-center text-indigo-100 pl-3">VyaparDock.</p>
      <div className='flex justify-between items-end h-full w-9/10 pl-15 pr-10  '>
        <div className=' px-2 pt-2 w-2/5 flex flex-row justify-start items-end gap-10 '>
          <Navbutton name="Home" path='/'></Navbutton>
          <Navbutton name="Hall of Recruits" path='/hall_of_recruits'></Navbutton>
          <Navbutton name="Resume-o-meter" path='/resume_o_meter'></Navbutton>
        </div>
        <div className=' p-2 w-50 flex flex-row justify-between'>
          <Navbutton name="Login" path='/login'></Navbutton>
          <Navbutton name="Sign Up" path='/sign_up'></Navbutton>
        </div>
      </div>
    </div>
  )
}

export default Navbar
