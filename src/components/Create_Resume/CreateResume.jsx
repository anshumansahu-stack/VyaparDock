import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from "react-hook-form"
import FormEntry from './FormEntry/FormEntry'
import PagePreview from './PagePreview/PagePreview'
import { DataContext } from './DataContext'
// Components:
//One div containing Live resume score and form
// Another div containing page Preview

const CreateResume = () => {
  const FORM_STEPS = ['personal_details', 'education', 'professional_experience', 'projects', 'technical_skills', 'positions_of_responsibility', 'achievements_and_certifications', 'view_form']

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

  const handleResetAllData = () => {
    //  Wipe out background browser memory storage
    localStorage.removeItem('vyapardock_resume_cache');

    // Clear out the live React Hook Form state memory cache. 
    // Passing an empty object {} clears out every array matrix, checkbox, and text field instantly
    methods.reset({
      firstname: '',
      lastname: '',
      currRole: '',
      currOrg: '',
      phone: '',
      altphone: '',
      email: '',
      github: '',
      linkedin: '',
      city: '',
      state: '',
      country: '',
      postalcode: '',
      education: [],
      experiences: [],
      projects: [],
      technicalskills: [],
      responsibilities: [],
      achievementsandcertifications: []
    });

    // Reset the wizard step index back to the beginning page lane coordinate
    setCurrentIndex(0);
  };

  const handleResetCurrentPage = () => {
  const currentStepName = FORM_STEPS[currentIndex];
  if (!currentStepName) return;

  const confirmClear = window.confirm(`Are you sure you want to clear all inputs on this page?`);
  if (!confirmClear) return;

  const updatedData = { ...methods.getValues() };

  // TARGETED RESET ACTION LAYER:
  if (currentStepName === 'personal_details') {
    // FIX APPLIED: Reset the specific top-level keys used in Personal Details
    const personalKeys = ['firstname', 'lastname', 'currRole', 'currOrg', 'phone', 'altphone', 'email', 'github', 'linkedin', 'city', 'state', 'country', 'postalcode'];
    personalKeys.forEach(key => updatedData[key] = '');
  } else {
    // FIX APPLIED: Map the Step Name to the actual Data Key used in your JSON
    const stepToDataKey = {
      'education': 'education',
      'professional_experience': 'experiences', // Matches JSON
      'projects': 'projects',
      'technical_skills': 'technicalskills', // Matches JSON
      'positions_of_responsibility': 'responsibilities', // Matches JSON
      'achievements_and_certifications': 'achievementsandcertifications' // Matches JSON
    };

    const dataKey = stepToDataKey[currentStepName];
    if (dataKey) {
      updatedData[dataKey] = []; // Clear the array
    }
  }

  // Force React Hook Form to update
  methods.reset(updatedData);

  // Sync to local storage
  localStorage.setItem('vyapardock_resume_cache', JSON.stringify(updatedData));
};

  const methods = useForm({
    defaultValues: getCachedData(),
    mode: 'onChange'
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
      totalSteps: FORM_STEPS.length,
      handleResetAllData,
      handleResetCurrentPage
    }}>
      <div style={{ background: 'linear-gradient(to left, #2c5364, #203a43, #0f2027)' }} className="w-full h-full flex justify-center items-center box-border p-5 gap-5">
        <FormEntry></FormEntry>
        <PagePreview></PagePreview>
      </div>
    </DataContext.Provider>
  )
}

export default CreateResume