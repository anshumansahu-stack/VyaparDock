import React from 'react'
import LiveScore from './FEComponents/LiveScore'
import { Outlet } from 'react-router'
import Stepper from './FEComponents/Stepper'

// HAs 3 components- Live score, the form where data needs to be entered, and a stepper scrollbar.


const FormEntry = () => {
  return (
    <div className="w-2/3 max-h-160 flex flex-col justify-center items-center p-3">
        <LiveScore></LiveScore>
        <Outlet/>
        <Stepper></Stepper>
    </div>
  )
}

export default FormEntry