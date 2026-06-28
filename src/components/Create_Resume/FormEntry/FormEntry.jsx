import React from 'react'
import LiveScore from './LiveScore'
import ActiveForm from './ActiveForm'
import Stepper from './Stepper'

// HAs 3 components- Live score, the form where data needs to be entered, and a stepper scrollbar.

const FormEntry = () => {
  return (
    <div className="bg-amber-600 w-2/3 flex flex-col justify-center items-center p-3 gap-2">
        <LiveScore></LiveScore>
        <ActiveForm></ActiveForm>
        <Stepper></Stepper>
    </div>
  )
}

export default FormEntry