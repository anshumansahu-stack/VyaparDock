import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';
const GradeBlock = (props) => {
  const GradeVal = typeof props.edu?.cgpa === 'string' ? props.edu.cgpa.trim() : ''; // Avoid react not an object error
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova]'>
      {GradeVal ? "CGPA: "+GradeVal : ""} 
    </TextFieldContainer>
  )
}

export default GradeBlock