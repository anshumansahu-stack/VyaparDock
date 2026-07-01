import React from 'react'
import FormEntry from './FormEntry/FormEntry'
import PagePreview from './PagePreview/PagePreview'
// Components:
//One div containing Live resume score and form
// Another div containing page Preview
const CreateResume = () => {
  return (
    <div style={{background: 'linear-gradient(to left, #2c5364, #203a43, #0f2027)'}} className="w-full h-9/10 flex justify-between box-border p-5 gap-5">
        <FormEntry></FormEntry>
        <PagePreview></PagePreview>
    </div>
  )
}

export default CreateResume