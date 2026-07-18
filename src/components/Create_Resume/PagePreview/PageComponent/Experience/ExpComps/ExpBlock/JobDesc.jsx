import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const JobDesc = (props) => {
  const DescVal = typeof props.exp?.jobdescription === 'string' ? props.exp.jobdescription.trim() : ''; // Avoid react not an object error
  return (
    <TextFieldContainer 
    className={'font-[Ibarra_Real_Nova] text-left whitespace-pre-line leading-relaxed  ' + (props.className || '')}
    >
      {DescVal ? DescVal : ""}
    </TextFieldContainer>
  )
}

export default JobDesc