import React, { useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { DataContext } from '../../../DataContext'
import NextButton from './Buttons/NextButton'
import PrevButton from './Buttons/PrevButton'
import SubmitButton from './Buttons/SubmitButton'

const Stepper = () => {
  const navigate = useNavigate()
  const location = useLocation() // Retrieves the current URL Information as an object.

  const { methods, onSubmit, currentIndex, setCurrentIndex, FORM_STEPS} = useContext(DataContext)

  const currentPath = location.pathname.split('/').pop() // Take the last element out of the domain URL. Thats essentially the current form URL.

  useEffect(() => {
    const calculatedIndex = FORM_STEPS.indexOf(currentPath)
    if (calculatedIndex !== -1) { // Guard clause, when partially rendered indexof() returns -1. Helps prevent infinite render-calculate loop cycle.
      setCurrentIndex(calculatedIndex)
    }
  }, [currentPath, setCurrentIndex])

  const isFirstStep = currentIndex === 0 // Truth value of is the current index at index 1.
  const isLastStep = currentIndex === FORM_STEPS.length - 1 // same but at last.

  const getFieldsForStep = (stepName) => { // For current step, get all the concerned fields
    switch (stepName) {
      case 'personal_details':
        // Explicitly lists all your top-level primitive strings from PersonalDetails
        return ['firstname', 'lastname', 'currRole', 'currOrg', 'phone', 'altphone', 'email', 'github', 'linkedin', 'city', 'state', 'country', 'postalcode']
      case 'areas_of_expertise':
        // Targets your dynamic array tree block completely
        return ['areasofexpertise']
      case 'professional_experience':
        return ['experiences']
      case 'education':
        return ['education']
      case 'technical_proficiencies':
        return ['technical_proficiencies']
      case 'projects':
        return ['projects']
      default:
        return []
    }
  }

  const handleNext = async () => { //asynchronous function
    // Get the validation targets for the active screen route
    const fieldsToValidate = getFieldsForStep(FORM_STEPS[currentIndex])

    // Instruct RHF to check only these fields. Returns true if they pass, false if they fail.
    const isStepValid = await methods.trigger(fieldsToValidate) // This is an asynchronous operation

    // If validation fails, alert and halt navigation so errors stay visible on the screen
    if (!isStepValid) {
      alert("Invalid entries detected!!")
      return
    }

    // 4. Proceed to the next step route safely if valid
    if (!isLastStep && currentIndex + 1 < FORM_STEPS.length) {
      navigate(`/create_resume/${FORM_STEPS[currentIndex + 1]}`)
    }
  }

  const handlePrev = () => { // If the current step has invalid fields, You are allowed to go back, No issue.
    if (!isFirstStep && currentIndex - 1 > -1) {
      navigate(`/create_resume/${FORM_STEPS[currentIndex - 1]}`)
    }
  } // similar functionality.

  const handleFinalSubmit = (formData) => {
    alert("Form values submitted successfully! Freezing layout data views...")
    onSubmit(formData) // Triggers your parent state lock
  } //post an alert and submit form data.

  const onKeyTap = (e) => {
    if (e.key === 'ArrowRight') {
      handleNext()
    }
    else if (e.key === 'ArrowLeft') {
      handlePrev()
    }
  }

  // Button navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore arrow keys if the user is actively typing inside a text field/textarea
      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') {
        // Dont bother cursor movement inside box
        return;
      }
      // If not typing, navigate freely using arrow keys!
      onKeyTap(e)
    }

    // Attach to window
    window.addEventListener('keydown', handleKeyDown)

    // CRITICAL CLEANUP: Removes listener when component unmounts to prevent memory leaks
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, isLastStep, isFirstStep, methods, FORM_STEPS]) // Rebinds securely when step updates, added FORM_STEPS array so that handleNext doesnt freeze if(in future updates) FORM_STEPS becomes dynamic
  // Main Logic

  if (isFirstStep) {
    return (
      <div className='bg-white w-full min-h-1/20 rounded-b-2xl flex justify-center gap-3 p-2'>
        <NextButton onClick={handleNext} />
      </div>
    )
  }
  else if (isLastStep) {
    return (
      <div className='bg-white w-full min-h-1/20 rounded-b-2xl flex justify-center gap-3 p-2'>
        <PrevButton onClick={handlePrev} />
        <SubmitButton onClick={methods.handleSubmit(handleFinalSubmit)} />
      </div>
    )
  }
  return (
    <div className='bg-white w-full min-h-1/20 rounded-b-2xl flex justify-center gap-3 p-2'>
      <PrevButton onClick={handlePrev} />
      <NextButton onClick={handleNext} />
    </div>
  )
}

export default Stepper