import React from 'react'
import NameOfProject from './ProjectBlock/NameOfProject'
import Skills from './ProjectBlock/Skills'
import DateBlock from './ProjectBlock/DateBlock'
import ProjDesc from './ProjectBlock/ProjDesc'
import ProjectContainer from './ProjectContainer/ProjectContainer'

const ProjectBlock = (props) => {
  return (
    <div className='flex flex-col w-full '>
      <div className='flex justify-between pt-2'>
        <div className='flex flex-col items-start justify-center'>
          <NameOfProject proj={props.proj}/>
          <Skills proj={props.proj}/>
        </div>
        <div className='flex flex-col items-end justify-center'>
          <DateBlock proj={props.proj} />
          <ProjectContainer/> 
          {/* Alignment */}
        </div>
      </div>
      <ProjDesc proj={props.proj} className='self-start' />
    </div>
  )
}

export default ProjectBlock