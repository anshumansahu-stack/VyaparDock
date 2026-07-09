import React from 'react'
import FormSubDiv from './FormSubDiv'

const DescriptionContainer = (props) => {
  return (
    <FormSubDiv className='min-h-30! min-w-full flex-col items-start gap-4! justify-start! '>
        {props.children}
    </FormSubDiv>
  )
}

export default DescriptionContainer