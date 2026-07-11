import React from 'react'
import ProjectContainer from '../ProjectContainer/ProjectContainer';
const ProjDesc = (props) => {
  const DescVal = typeof props.proj?.projectdescription === 'string' ? props.proj.projectdescription.trim() : ''; // Avoid react not an object error
  return (
    <ProjectContainer 
    className={'font-[Ibarra_Real_Nova] text-[17px]! text-left whitespace-pre-line leading-relaxed  ' + (props.className || '')}
    >
      {DescVal ? DescVal : ""} 
    </ProjectContainer>
  )
}

export default ProjDesc