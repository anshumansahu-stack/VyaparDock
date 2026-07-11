import React, {useContext} from 'react'
import { DataContext } from '../../../DataContext'
import Separator from '../../PageAuxiliaries/Separator'
import TitleField from '../../PageAuxiliaries/TitleField'
import ProjectBlock from './ProjectComps/ProjectBlock'
import Bullet from '../../PageAuxiliaries/Bullet'

const Projects = () => {
  const { liveData, currentIndex } = useContext(DataContext)
  const projectsList = liveData?.projects || []

  if (currentIndex < 1 && projectsList.length === 0) return null; // If theres nothing to render then return null.
  return (
    <div className='text-black flex flex-col items-start break-inside-avoid'>
        <TitleField title='Projects'/>
        <Separator/>
        {projectsList.map((proj, index) => { // edu is basically the block to be rendered, We check if its empty and then put things on the screen.
          // Skip rendering if this specific row is empty
          const hasContent = proj.projecttitle || proj.projectdescription || proj.startDate || proj.endDate || proj.skillstack;
          if (!hasContent) return <Bullet/>;

          // Render a distinct, separate block wrapper for every index item
          return <div className='flex w-full gap-2'>
            <Bullet/>
            <ProjectBlock key={index} proj={proj} />
          </div>
        })}
    </div>
  )
}

export default Projects