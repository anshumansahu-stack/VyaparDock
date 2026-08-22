import React from 'react'
// Conditionally rendered, everywhere except view_form
import { useLocation } from 'react-router'
import Navbutton from './buttons/Navbutton.jsx'
import { TypeAnimation } from 'react-type-animation'

const getSuffix = (pathname) => {
  if (pathname.startsWith('/create_resume')) return 'Craft.';
  if (pathname.startsWith('/resume_o_meter')) return 'Parse.';
  return 'Dock.';
};

const Navbar = () => {

  const location = useLocation()// Current URL
  if (location.pathname.endsWith('/view_form')) {
    return null;
  }
  const suffix=getSuffix (location.pathname)
  return (
    <div className='bg-black/50 w-full min-h-18.25 flex flex-row justify-between items-end rounded-b-[15px]'>
      <p className=" font-['Freeman'] font-bold text-[43px] text-left pl-3 w-[17%]">
        <TypeAnimation
          sequence={[
            'Vyapar',
            5000,
            'व्यापार',
            5000,
          ]}
          wrapper="span"
          speed={5}
          deletionSpeed={50}
          repeat={Infinity}
          cursor={false}
          className="font-['Freeman','Teko'] text-[43px] text-indigo-100"
        />
        <span className="text-purple-500">{suffix}</span>
      </p>
      <div className='flex justify-between items-end h-full w-9/10 pl-15 pr-10  '>
        <div className=' px-2 pt-2 w-2/5 flex flex-row justify-start items-end gap-10 '>
          <Navbutton name="Home" path='/'></Navbutton>
          <Navbutton name="Hall of Recruits" path='/hall_of_recruits'></Navbutton>
          <Navbutton name="Resume-o-meter" path='/resume_o_meter'></Navbutton>
        </div>
        <div className='px-2 w-50 flex flex-row justify-between'>
          <Navbutton name="Login" path='/login'></Navbutton>
          <Navbutton name="Sign Up" path='/sign_up'></Navbutton>
        </div>
      </div>
    </div>
  )
}

export default Navbar
