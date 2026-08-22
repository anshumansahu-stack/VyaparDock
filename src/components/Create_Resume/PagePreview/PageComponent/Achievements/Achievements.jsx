import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import Separator from '../../PageAuxiliaries/Separator'
import TitleField from '../../PageAuxiliaries/TitleField'
import AchEntry from './AchComps/AchEntry'
import EmptyContainer from '../../PageAuxiliaries/EmptyContainer'
import EmptyPlaceholder from '../../PageAuxiliaries/EmptyPlaceholder'
import RenderingContainer from '../../PageAuxiliaries/RenderingContainer'
import MainPrintingDiv from '../../PageAuxiliaries/MainPrintingDiv'

const Achievements = () => {
  const { liveData, currentIndex, FORM_STEPS } = useContext(DataContext)
  const achievementsList = liveData?.achievementsandcertifications || []

  const stepIndex = FORM_STEPS.indexOf('achievements_and_certifications')

  if (currentIndex < stepIndex && achievementsList.length === 0) return null; // If theres nothing to render then return null.
  return (
    <MainPrintingDiv>
      <TitleField title='Achievements' />
      <Separator />
      {achievementsList.map((achLi, index) => { // edu is basically the block to be rendered, We check if its empty and then put things on the screen.
        // Skip rendering if this specific row is empty
        const hasContent = achLi.achtitle || achLi.achdesc ;
        if (!hasContent) return (
          <EmptyContainer key={index}>
            <EmptyPlaceholder placeholder='-- Enter Achievement --' />
          </EmptyContainer>
        )

        // Render a distinct, separate block wrapper for every index item
        return <RenderingContainer key={index}>
          <AchEntry achLi={achLi} />
        </RenderingContainer>
      })}
    </MainPrintingDiv>
  )
}

export default Achievements