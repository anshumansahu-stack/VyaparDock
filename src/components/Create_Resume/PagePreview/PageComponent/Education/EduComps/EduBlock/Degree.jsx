import React from 'react'
import EduContainer from '../EduContainers/EduContainer'

const Degree = (props) => {
  const DegVal = typeof props.edu?.degree === 'string' ? props.edu.degree.trim() : '';
  return (
    <EduContainer className='font-[Ibarra_Real_Nova] italic'>
      {DegVal ? DegVal : ""} 
    </EduContainer>
    )
}

export default Degree