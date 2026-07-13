import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const Degree = (props) => {
  const skills = props.proj?.skillstack;
  
  // Format the array into a comma-separated string (e.g., "Python, PostgreSQL, PowerBI")
  const displaySkills = Array.isArray(skills) && skills.length > 0 
    ? skills.join(', ') 
    : '';
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova] font-bold italic text-left'>
      {displaySkills ? displaySkills : ""} 
    </TextFieldContainer>
    )
}

export default Degree