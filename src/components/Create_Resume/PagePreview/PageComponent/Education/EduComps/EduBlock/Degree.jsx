import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const Degree = (props) => {
  const DegVal = typeof props.edu?.degree === 'string' ? props.edu.degree.trim() : '';
  return (
    <TextFieldContainer className={'font-[Ibarra_Real_Nova] italic ' + (props.className || '')}>
      {DegVal ? DegVal : ""} 
    </TextFieldContainer>
    )
}

export default Degree