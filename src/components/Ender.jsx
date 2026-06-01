import React from 'react'
import Footerbutton from './buttons/Footerbutton'

const Ender = () => {
  return (
    <div className="w-full h-30 flex justify-start gap-5 p-3 pb-20 border-t-2 border-white">
      <div>
        <span>Product</span>
          <ul>
            <Footerbutton name="Home"></Footerbutton>
            <Footerbutton name="Hall of Recruits"></Footerbutton>
            <Footerbutton name="Recruit-o-meter"></Footerbutton>
          </ul>
      </div>
      <div>
        <span>Company</span>
          <ul>
            <Footerbutton name="About"></Footerbutton>
            <Footerbutton name="Contact"></Footerbutton>
            <Footerbutton name="Mail"></Footerbutton>
          </ul>
      </div>
      <div>
        <span>Social</span>
          <ul>
            <Footerbutton name="LinkedIn"></Footerbutton>
            <Footerbutton name="Reddit"></Footerbutton>
            <Footerbutton name="GitHub"></Footerbutton>
          </ul>
      </div>
    </div>
  )
}

export default Ender
