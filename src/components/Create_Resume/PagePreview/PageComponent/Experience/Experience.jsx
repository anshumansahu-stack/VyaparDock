import React, {useContext} from 'react'
import { DataContext } from '../../../DataContext'
import Separator from '../../PageAuxiliaries/Separator'
import TitleField from '../../PageAuxiliaries/TitleField'
import ExpBlock from './ExpComps/ExpBlock'
import Bullet from '../../PageAuxiliaries/Bullet'

const Experience = () => {
  const { liveData, currentIndex } = useContext(DataContext)
  const experienceList = liveData?.experiences || []

  if (currentIndex < 1 && experienceList.length === 0) return null; // If theres nothing to render then return null.
  return (
    <div className='text-black flex flex-col items-start break-inside-avoid'>
        <TitleField title='Experience'/>
        <Separator/>
        {experienceList.map((exp, index) => { // edu is basically the block to be rendered, We check if its empty and then put things on the screen.
          // Skip rendering if this specific row is empty
          const hasContent = exp.jobtitle || exp.jobstate || exp.employer || exp.startDate || exp.endDate || exp.jobcity || exp.jobdescription;
          if (!hasContent) return <Bullet/>;

          // Render a distinct, separate block wrapper for every index item
          return <div className='flex w-full gap-2'>
            <Bullet/>
            <ExpBlock key={index} exp={exp} />
          </div>
        })}
    </div>
  )
}

export default Experience