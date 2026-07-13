import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import Separator from '../../PageAuxiliaries/Separator'
import TitleField from '../../PageAuxiliaries/TitleField'
import SkillBlock from './SkillComps/SkillBlock'
import EmptyContainer from '../../PageAuxiliaries/EmptyContainer'
import EmptyPlaceholder from '../../PageAuxiliaries/EmptyPlaceholder'
import RenderingContainer from '../../PageAuxiliaries/RenderingContainer'
import MainPrintingDiv from '../../PageAuxiliaries/MainPrintingDiv'

const TechnicalSkills = () => {
  const { liveData, currentIndex, FORM_STEPS } = useContext(DataContext)
  const technicalskillsList = liveData?.technicalskills || []

  const stepIndex = FORM_STEPS.indexOf('technical_skills')

  if (currentIndex < stepIndex && technicalskillsList.length === 0) return null; // If theres nothing to render then return null.
  return (
    <MainPrintingDiv>
      <TitleField title='Technical Skills' />
      <Separator />
      {technicalskillsList.map((tecSk, index) => { // edu is basically the block to be rendered, We check if its empty and then put things on the screen.
        // Skip rendering if this specific row is empty
        const hasContent = tecSk.category || tecSk.skillList ;
        if (!hasContent) return (
          <EmptyContainer key={index}>
            <EmptyPlaceholder placeholder='-- Enter Skill --' />
          </EmptyContainer>
        )

        // Render a distinct, separate block wrapper for every index item
        return <RenderingContainer>
          <SkillBlock key={index} tecSk={tecSk} />
        </RenderingContainer>
      })}
    </MainPrintingDiv>
  )
}

export default TechnicalSkills