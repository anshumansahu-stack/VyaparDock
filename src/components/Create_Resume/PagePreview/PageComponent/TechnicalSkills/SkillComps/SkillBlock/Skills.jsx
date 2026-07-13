import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const Skills = (props) => {
  const skills = props.tecSk?.skillList;
  
  // Format the array into a comma-separated string (e.g., "Python, PostgreSQL, PowerBI")
  const displaySkills = Array.isArray(skills) && skills.length > 0 
    ? skills.join(', ') 
    : '';
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova] text-left '>
      {displaySkills ? displaySkills : ""} 
    </TextFieldContainer>
    )
}

export default Skills