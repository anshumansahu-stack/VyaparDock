import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import Separator from '../../PageAuxiliaries/Separator'
import TitleField from '../../PageAuxiliaries/TitleField'
import EduBlock from './EduComps/EduBlock'
import Bullet from '../../PageAuxiliaries/Bullet'
import EmptyContainer from '../../PageAuxiliaries/EmptyContainer'
import EmptyPlaceholder from '../../PageAuxiliaries/EmptyPlaceholder'
import RenderingContainer from '../../PageAuxiliaries/RenderingContainer'
import MainPrintingDiv from '../../PageAuxiliaries/MainPrintingDiv'

const Education = () => {
  const { liveData, currentIndex, FORM_STEPS } = useContext(DataContext)
  const educationList = liveData?.education || []

  const hasRealContent = educationList.some(edu =>
    edu.organisation || edu.degree || edu.studyboard || edu.startDate || edu.endDate || edu.cgpa
  )

  const stepIndex = FORM_STEPS.indexOf('education')
  if (currentIndex < stepIndex && !hasRealContent) return null; // If theres nothing to render and we are in the page previous then return null.
  return (
    <MainPrintingDiv>
      <TitleField title='Education' />
      <Separator />
      {educationList.map((edu, index) => { // edu is basically the block to be rendered, We check if its empty and then put things on the screen.
        // Skip rendering if this specific row is empty
        const hasContent = edu.organisation || edu.degree || edu.studyboard || edu.startDate || edu.endDate || edu.cgpa;
        if (!hasContent) return (
          <EmptyContainer key={index}>
            <Bullet />
            <EmptyPlaceholder placeholder='-- Enter Academic Details --'/>
          </EmptyContainer>
        )

        // Render a distinct, separate block wrapper for every index item
        return <RenderingContainer>
          <Bullet />
          <EduBlock key={index} edu={edu} />
        </RenderingContainer>
      })}
    </MainPrintingDiv>
  )
}

export default Education