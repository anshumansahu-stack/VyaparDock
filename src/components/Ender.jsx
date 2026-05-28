import React from 'react'
import Navbutton from './buttons/Navbutton'

const Ender = () => {
  return (
    <div className="w-full h-30 bg-green-800 flex justify-start gap-5 p-3">
      <Navbutton name="About me"></Navbutton>
      <Navbutton name="Contact me"></Navbutton>
    </div>
  )
}

export default Ender
