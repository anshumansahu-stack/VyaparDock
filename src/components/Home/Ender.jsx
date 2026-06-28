import React from 'react'
import Footerbutton from '../buttons/Footerbutton'

const Ender = () => {
  return (
    <div className="backdrop-blur-md bg-black/50 w-full h-1/5 flex justify-between gap-5 p-10 pb-20 border-t-2 border-white rounded-t-[15px]">
      <div className='border-r-2 border-white w-1/2 flex flex-col gap-5'>
        <div >
          <span className="font-[Google_Sans] text-indigo-400 text-[20px]">PRODUCT</span>
          <ul>
            <Footerbutton name="Home"></Footerbutton>
            <Footerbutton name="Hall of Recruits"></Footerbutton>
            <Footerbutton name="Recruit-o-meter"></Footerbutton>
          </ul>
        </div>
        <div className="text-white ">
          © 2026 VyaparDock
        </div>
      </div>
      <div className="flex flex-col w-1/2 h-full justify-center items-between gap-5">
        <div >
          <span className="font-[Google_Sans] text-indigo-400 text-[20px]">COMPANY</span>
          <ul>
            <Footerbutton name="About" link="https://anshumansahu-stack.github.io/My_Personal_portfolio_website/"></Footerbutton>
            <Footerbutton name="Contact" link="tel:+918260878904"></Footerbutton>
            <Footerbutton name="Mail" link="mailto:sahuanshuman81@gmail.com"></Footerbutton>
          </ul>
        </div>
        <div>
          <span className="font-[Google_Sans] text-indigo-400 text-[20px]">SOCIAL</span>
          <ul className="flex gap-10">
            <Footerbutton name="LinkedIn" link="https://www.linkedin.com/in/anshuman-sahu-a9799b2b4/"></Footerbutton>
            <Footerbutton name="Reddit" link="https://www.reddit.com/user/CartographerFun6006/"></Footerbutton>
            <Footerbutton name="GitHub" link="https://github.com/anshumansahu-stack"></Footerbutton>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Ender
