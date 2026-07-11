import React from 'react'
import EduContainer from '../EduContainers/EduContainer';
const GradeBlock = (props) => {
  const GradeVal = typeof props.edu?.cgpa === 'string' ? props.edu.cgpa.trim() : ''; // Avoid react not an object error
  return (
    <EduContainer className='font-[Ibarra_Real_Nova]'>
      {GradeVal ? "CGPA: "+GradeVal : ""} 
    </EduContainer>
  )
}

export default GradeBlock