import React, { useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useNavigate, useLocation } from 'react-router'
import { DataContext } from '../../../DataContext'
import NextButton from './Buttons/NextButton'
import PrevButton from './Buttons/PrevButton'
import SubmitButton from './Buttons/SubmitButton'
import ClearButton from './Buttons/ClearButton'
import ClearCurrentButton from './Buttons/ClearCurrentButton'
import EditData from './Buttons/EditData'
import PrintPDF from './Buttons/PrintPDF'
import html2pdf from 'html2pdf.js'

const Stepper = () => {
  const navigate = useNavigate()
  const location = useLocation() // Retrieves the current URL Information as an object.

  const { methods, onSubmit, currentIndex, setCurrentIndex, FORM_STEPS, handleResetAllData, handleResetCurrentPage, downloadResume, completeFormValidation } = useContext(DataContext)

  const currentPath = location.pathname.split('/').pop() // Take the last element out of the domain URL. Thats essentially the current form URL.

  useEffect(() => {
    const calculatedIndex = FORM_STEPS.indexOf(currentPath)
    if (calculatedIndex !== -1) { // Guard clause, when partially rendered indexof() returns -1. Helps prevent infinite render-calculate loop cycle.
      setCurrentIndex(calculatedIndex)
    }
  }, [currentPath, setCurrentIndex])

  const isFirstStep = currentIndex === 0 // Truth value of is the current index at index 1.
  const isSecondLastStep = currentIndex === FORM_STEPS.length - 2 // same but at last second.
  const isLastStep = currentIndex === FORM_STEPS.length - 1

  const hasData = Object.keys(methods.watch()).length > 0

  const getFieldsForStep = (stepName) => { // For current step, get all the concerned fields
    switch (stepName) {
      case 'personal_details':
        return ['firstname', 'lastname', 'currRole', 'currOrg', 'phone', 'altphone', 'email', 'github', 'linkedin', 'city', 'state', 'country', 'postalcode']
      case 'education':
        return ['education']
      case 'professional_experience':
        return ['experiences']
      case 'projects':
        return ['projects']
      case 'technical_skills':
        return ['technicalskills']
      case 'positions_of_responsibility':
        return ['responsibilities']
      case 'achievements_and_certifications':
        return ['achievementsandcertifications']
      default:
        return []
    }
  }

  const triggerResetPrompt = () => {
    const confirmClear = window.confirm("Are you sure you want to delete all resume data? This action cannot be undone.");
    if (confirmClear) {
      handleResetAllData();
      navigate('/create_resume/personal_details'); // Redirect back to page 1 automatically
    }
  };

  const handleNext = async () => {
    if (isLastStep) return;

    const fieldsToValidate = getFieldsForStep(FORM_STEPS[currentIndex])

    const isStepValid = await methods.trigger(fieldsToValidate) // This is an asynchronous operation

    if (!isStepValid) {
      Swal.fire({
        title: '<strong>Whoops!</strong>',
        text: 'Invalid entries detected.',
        icon: 'error',
        color: 'white',
        customClass: {
          popup: 'bg-moonwalker'
        },
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#e11d48', // Tailwind red-600
      });
      return
    }

    if (!isSecondLastStep && currentIndex + 1 < FORM_STEPS.length - 1) {
      navigate(`/create_resume/${FORM_STEPS[currentIndex + 1]}`)
    }
  }

  const handlePrev = () => { // If the current step has invalid fields, You are allowed to go back.
    if (isLastStep) return;

    if (!isFirstStep) {
      navigate(`/create_resume/${FORM_STEPS[currentIndex - 1]}`)
    }
  } // similar functionality.

  const handleFinalSubmit = async (formData) => {

    if (event) event.preventDefault();

    const fieldsToValidate = getFieldsForStep(FORM_STEPS[currentIndex])

    const formValid = await completeFormValidation()

    if (formValid === true) {
      const confirmSubmit = await Swal.fire({
        title: "<strong>Confirm Submission</strong>",
        icon: "info",
        color: 'white',
        customClass: {
          popup: 'bg-moonwalker'
        },
        html: `
    Are you sure you want to submit all form data?
  `,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
    <b>Sure!</b>
  `,
        confirmButtonAriaLabel: "Confirm Changes and submit your form",
        cancelButtonText: `
    <b>⟵ Edit Form</b>
  `,
        cancelButtonAriaLabel: "Go back and make changes to your form"
      });
      if (!confirmSubmit.isConfirmed) return;

      await Swal.fire({
        title: "<strong>Yippee!</strong>",
        html: `All Form Values Submitted Successfully.`,
        icon: "success",
        color: 'white',
        customClass: {
          popup: 'bg-moonwalker'
        },
        confirmButtonText: `
    <b>Preview Full Resume ⟶</b>
  `,

      });
      onSubmit(formData);
      navigate('/create_resume/view_form');
    }

    else {
      await Swal.fire({
        icon: 'question',
        title: '<strong>You think you smart, huh?</strong>',
        color: 'white',
        customClass: {
          popup: 'bg-moonwalker'
        },
        html: `Please fix errors on these pages: ${formValid.join(', ')}.`,
        confirmButtonText: `
    <b>⟵ Edit Form</b>
  `,

      })
      console.log(formValid)
      const firstErrorSite=formValid[0].toLowerCase().replaceAll(' ','_')
      navigate(`/create_resume/${firstErrorSite}`)
      // known: doesn't re-trigger field errors on jump-back, low priority since URL tampering is rare
    }
  };

  const onKeyTap = (e) => {
    e.preventDefault();
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'Enter') {
      methods.handleSubmit(handleFinalSubmit)();
    }
  };

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
  }, [currentIndex, isSecondLastStep, isFirstStep, methods, FORM_STEPS]) // Rebinds securely when step updates, added FORM_STEPS array so that handleNext doesnt freeze if(in future updates) FORM_STEPS becomes dynamic
  // Main Logic

  const handleEdit = () => {
    navigate('/create_resume/achievements_and_certifications')
  }

  return (
    <div className={'bg-white w-full min-h-1/20 rounded-b-2xl flex justify-center items-center p-2 relative print:hidden ' + (isLastStep ? 'gap-50' : 'gap-3')}>

      {!isLastStep && hasData && (
        <ClearCurrentButton onClick={handleResetCurrentPage} />
      )}

      {!isLastStep && !isFirstStep && <PrevButton onClick={handlePrev} />}

      {!isLastStep && (!isSecondLastStep ? (
        <NextButton onClick={handleNext} />
      ) : (
        <SubmitButton onClick={handleFinalSubmit} />
      ))}

      {!isLastStep && hasData && (
        <ClearButton onClick={triggerResetPrompt} />
      )}

      {isLastStep && (
        <EditData onClick={handleEdit} />
      )}
      {isLastStep && (
        <PrintPDF onClick={downloadResume} />
      )}

    </div>
  )
}

export default Stepper