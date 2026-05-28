import React from 'react'

import Navbutton from './buttons/Navbutton.jsx'

const Navbar = () => {
  return (
    <div className='bg-red-400 w-full h-20 flex flex-col justify-between'>
      <p className="font-bold text-3xl text-center">ResumeIQ</p>
      <div className='flex flex-row justify-between'>
        <div className='bg-blue-400 p-2 w-80 flex flex-row justify-between'>
          <Navbutton name="Home"></Navbutton>
          <Navbutton name="Hall of Recruits"></Navbutton>
          <Navbutton name="Resume-o-meter"></Navbutton>
        </div>
        <div className='bg-blue-400 p-2 w-40 flex flex-row justify-between'>
          <Navbutton name="Login"></Navbutton>
          <Navbutton name="Sign Up"></Navbutton>
        </div>
      </div>

    </div>
  )
}

export default Navbar
