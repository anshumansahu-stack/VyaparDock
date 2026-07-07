import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { DataContext } from '../../../DataContext'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import SubmitButton from './SubmitButton'

const FORM_STEPS = ['personal_details','education', 'professional_experience']

const Stepper = () => {
  const navigate = useNavigate()
  const location = useLocation() // Retrieves the current URL Information as an object.

  const { methods, onSubmit } = useContext(DataContext)

  const currentPath = location.pathname.split('/').pop() // Take the last element out of the domain URL. Thats essentially the current form URL.

  const currentIndex = FORM_STEPS.indexOf(currentPath) // Take the index of current path.

  const isFirstStep = currentIndex === 0 // Truth value of is the current index at index 1.
  const isLastStep = currentIndex === FORM_STEPS.length - 1 // same but at last.

  const handleNext = () => {
    if (!isLastStep && currentIndex+1<FORM_STEPS.length) { // modification: add an index guard
      navigate(`/create_resume/${FORM_STEPS[currentIndex + 1]}`)
    }
  } // The next button will take you to the next url in the FORM_STEPS list.

  const handlePrev = () => {
    if (!isFirstStep && currentIndex-1>-1) {
      navigate(`/create_resume/${FORM_STEPS[currentIndex - 1]}`)
    }
  } // similar functionality.

  const handleFinalSubmit = (formData) => {
    alert("Form values submitted successfully! Freezing layout data views...")
    onSubmit(formData) // Triggers your parent state lock
  } //post an alert and submit form data.

  // Main Logic

  if(isFirstStep){
    return (
      <div className='bg-white w-full min-h-1/20 rounded-b-2xl flex justify-center gap-3 p-2'>
        <NextButton onClick={handleNext}/>
      </div>
    )
  }
  else if(isLastStep){
    return (
      <div className='bg-white w-full min-h-1/20 rounded-b-2xl flex justify-center gap-3 p-2'>
        <PrevButton onClick={handlePrev}/>
        <SubmitButton onClick={methods.handleSubmit(handleFinalSubmit)}/>
      </div>
    )
  }
  return (
    <div className='bg-white w-full min-h-1/20 rounded-b-2xl flex justify-center gap-3 p-2'>
      <PrevButton onClick={handlePrev}/>
      <NextButton onClick={handleNext}/>
    </div>
  )
}

export default Stepper