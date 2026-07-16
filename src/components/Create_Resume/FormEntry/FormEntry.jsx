import React from 'react'
import LiveScore from './FEComponents/LiveScore'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router'
import Stepper from './FEComponents/Stepper/Stepper'

// HAs 3 components- Live score, the form where data needs to be entered, and a stepper scrollbar.


const FormEntry = () => {
  const location=useLocation()
  const isLastIndex=location.pathname.endsWith('/view_form')
  return (
    <div className={"w-2/3 h-[80vh] flex flex-col justify-center items-center overflow-hidden " + (isLastIndex? 'min-h-full! w-[51vw]':'')}>
        <LiveScore></LiveScore>
        <Outlet/>
        <Stepper></Stepper>
    </div>
  )
}

export default FormEntry