import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from "react-hook-form"
import FormEntry from './FormEntry/FormEntry'
import PagePreview from './PagePreview/PagePreview'
import { DataContext } from './DataContext'
// Components:
//One div containing Live resume score and form
// Another div containing page Preview

const CreateResume = () => {
  const FORM_STEPS = ['personal_details', 'education', 'professional_experience', 'projects', 'areas_of_expertise', 'technical_proficiencies']

  const [Data, setData] = useState({}) // These will be passed down as context.

  const getCachedData = () => {
    try {
      const saved = localStorage.getItem('vyapardock_resume_cache')
      return saved ? JSON.parse(saved) : {}
    } catch (e) {
      console.error("Cache parsing anomaly, falling back to empty:", e)
      return {}
    }
  } // For local reloads, globally backend is required

  const methods = useForm({
    defaultValues: getCachedData(),
    mode:'onChange'
  })// Default values loaded from recent cached data

  const liveData = methods.watch() //This will watch the livedata of the form

  useEffect(() => {
    // Only save if there is actually data populated to prevent overwriting with nothing
    if (Object.keys(liveData).length > 0) {
      localStorage.setItem('vyapardock_resume_cache', JSON.stringify(liveData))
    }
  }, [liveData]) // As a side effect of change the data will be written locally onto cache

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields }, // added touchedFields to prevent new field addition error
    clearErrors
  } = methods


  const [currentIndex, setCurrentIndex] = useState(0)

  const onSubmit = (EnteredData) => {
    setData(EnteredData)
    console.log("Final payload dispatched:", EnteredData)
    localStorage.removeItem('vyapardock_resume_cache')
  }

  return (
    <DataContext.Provider value={{ 
      Data, 
      setData, 
      liveData, 
      methods, 
      onSubmit, 
      currentIndex, 
      setCurrentIndex, 
      FORM_STEPS, 
      totalSteps: FORM_STEPS.length}}>
      <div style={{ background: 'linear-gradient(to left, #2c5364, #203a43, #0f2027)' }} className="w-full h-9/10 flex justify-between box-border p-5 gap-5">
        <FormEntry></FormEntry>
        <PagePreview></PagePreview>
      </div>
    </DataContext.Provider>
  )
}

export default CreateResume