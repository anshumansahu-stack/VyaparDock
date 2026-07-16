import React from 'react'
import ButtonLayout from './ButtonLayout'

const ClearButton = (props) => {
  return (
    <ButtonLayout className='text-red-500! border-red-500! absolute right-5' onClick={props.onClick}>
      Clear Form
    </ButtonLayout>
  )
}

export default ClearButton