import React from 'react'
import ButtonLayout from './ButtonLayout'

const ClearCurrentButton = (props) => {
  return (
    <ButtonLayout className='text-orange-500! border-orange-500! absolute left-5' onClick={props.onClick}>
      Clear This Page
    </ButtonLayout>
  )
}

export default ClearCurrentButton