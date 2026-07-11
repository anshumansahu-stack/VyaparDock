import React from 'react'
import ProjectContainer from '../ProjectContainer/ProjectContainer';

const Degree = (props) => {
  const skills = props.proj?.skillstack;
  
  // Format the array into a comma-separated string (e.g., "Python, PostgreSQL, PowerBI")
  const displaySkills = Array.isArray(skills) && skills.length > 0 
    ? skills.join(', ') 
    : '';
  return (
    <ProjectContainer className='font-[Ibarra_Real_Nova] font-bols italic'>
      {displaySkills ? displaySkills : ""} 
    </ProjectContainer>
    )
}

export default Degree