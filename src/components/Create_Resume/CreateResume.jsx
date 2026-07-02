import React, { useState } from 'react'
import { useForm, FormProvider } from "react-hook-form"
import FormEntry from './FormEntry/FormEntry'
import PagePreview from './PagePreview/PagePreview'
import { DataContext } from './FormEntry/DataContext'
// Components:
//One div containing Live resume score and form
// Another div containing page Preview
const CreateResume = () => {
  const [Data, setData] = useState({}) // These will be passed down as context.
  
  const methods = useForm()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods

  const liveData=methods.watch() //This will watch the livedata of the form

  const onSubmit=(EnteredData)=>{
    setData(EnteredData)
  }
  return (
    <DataContext.Provider value={{ Data, setData, liveData, methods, onSubmit, FormProvider}}>
      <div style={{ background: 'linear-gradient(to left, #2c5364, #203a43, #0f2027)' }} className="w-full h-9/10 flex justify-between box-border p-5 gap-5">
        <FormEntry></FormEntry>
        <PagePreview></PagePreview>
      </div>
    </DataContext.Provider>
  )
}

export default CreateResume