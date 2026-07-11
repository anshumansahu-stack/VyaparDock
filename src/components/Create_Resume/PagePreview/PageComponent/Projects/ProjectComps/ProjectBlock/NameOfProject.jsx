import React from 'react'
import ProjectContainer from '../ProjectContainer/ProjectContainer';

const NameOfProject = (props) => {
  const projName = typeof props.proj?.projecttitle === 'string' ? props.proj.projecttitle.trim() : '';
  return (
    <ProjectContainer className={'font-[Ibarra_Real_Nova] font-bold ' + (props.className || "")}>
      {projName ? projName : ""} 
    </ProjectContainer>
    )
}

export default NameOfProject