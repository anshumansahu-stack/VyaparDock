import React, {useContext} from 'react'
import { DataContext } from '../../../DataContext'
import Separator from '../../PageAuxiliaries/Separator'
import TitleField from '../../PageAuxiliaries/TitleField'
import ExpBlock from './ExpComps/ExpBlock'
import Bullet from '../../PageAuxiliaries/Bullet'
import EmptyContainer from '../../PageAuxiliaries/EmptyContainer'
import EmptyPlaceholder from '../../PageAuxiliaries/EmptyPlaceholder'
import RenderingContainer from '../../PageAuxiliaries/RenderingContainer'
import MainPrintingDiv from '../../PageAuxiliaries/MainPrintingDiv'

const Experience = () => {
  const { liveData, currentIndex, FORM_STEPS} = useContext(DataContext)
  const experienceList = liveData?.experiences || []

  const hasRealContent = experienceList.some(exp =>
    exp.jobtitle || exp.jobstate || exp.employer || exp.startDate || exp.endDate || exp.jobcity || exp.jobdescription
  )

  const stepIndex = FORM_STEPS.indexOf('professional_experience')
  
   if (currentIndex < stepIndex && !hasRealContent) return null; // If theres nothing to render then return null.
  return (
    <MainPrintingDiv>
        <TitleField title='Experience'/>
        <Separator/>
        {experienceList.map((exp, index) => { // edu is basically the block to be rendered, We check if its empty and then put things on the screen.
          // Skip rendering if this specific row is empty
          const hasContent = exp.jobtitle || exp.jobstate || exp.employer || exp.startDate || exp.endDate || exp.jobcity || exp.jobdescription;
          if (!hasContent) return (
          <EmptyContainer key={index}>
            <Bullet />
            <EmptyPlaceholder placeholder='-- Enter Experience --'/>
          </EmptyContainer>)

          // Render a distinct, separate block wrapper for every index item
          return <RenderingContainer>
            <Bullet/>
            <ExpBlock key={index} exp={exp} />
          </RenderingContainer>
        })}
    </MainPrintingDiv>
  )
}

export default Experience