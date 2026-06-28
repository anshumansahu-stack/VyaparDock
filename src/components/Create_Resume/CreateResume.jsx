import React from 'react'
import FormEntry from './FormEntry/FormEntry'
import PagePreview from './PagePreview/PagePreview'
// Components:
//One div containing Live resume score and form
// Another div containing page Preview
const CreateResume = () => {
  return (
    <div className="w-full h-163 flex justify-between p-5 gap-5">
        <FormEntry></FormEntry>
        <PagePreview></PagePreview>
    </div>
  )
}

export default CreateResume