import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const JobTitle = (props) => {
  const orgName = typeof props.exp?.jobtitle === 'string' ? props.exp.jobtitle.trim() : '';
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova] italic'>
      {orgName ? orgName : ""} 
    </TextFieldContainer>
    )
}

export default JobTitle