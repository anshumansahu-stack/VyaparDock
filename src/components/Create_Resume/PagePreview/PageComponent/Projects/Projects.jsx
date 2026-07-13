import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import Separator from '../../PageAuxiliaries/Separator'
import TitleField from '../../PageAuxiliaries/TitleField'
import ProjectBlock from './ProjectComps/ProjectBlock'
import Bullet from '../../PageAuxiliaries/Bullet'
import EmptyContainer from '../../PageAuxiliaries/EmptyContainer'
import EmptyPlaceholder from '../../PageAuxiliaries/EmptyPlaceholder'
import RenderingContainer from '../../PageAuxiliaries/RenderingContainer'
import MainPrintingDiv from '../../PageAuxiliaries/MainPrintingDiv'

const Projects = () => {
  const { liveData, currentIndex, FORM_STEPS } = useContext(DataContext)
  const projectsList = liveData?.projects || []


  const hasRealContent = projectsList.some(proj =>
    proj.projecttitle || proj.startDate || proj.endDate || (proj.skillstack && proj.skillstack.length > 0) || proj.projectdescription //For arrays length and existence both need to be checked.
  )
  const stepIndex = FORM_STEPS.indexOf('projects')

  if (currentIndex < stepIndex && !hasRealContent) return null; // If theres nothing to render then return null.
  return (
    <MainPrintingDiv>
      <TitleField title='Projects' />
      <Separator />
      {projectsList.map((proj, index) => { // edu is basically the block to be rendered, We check if its empty and then put things on the screen.
        // Skip rendering if this specific row is empty
        const hasContent = proj.projecttitle || proj.projectdescription || proj.startDate || proj.endDate || (proj.skillstack && proj.skillstack.length > 0);
        if (!hasContent) return (
          <EmptyContainer key={index}>
            <Bullet />
            <EmptyPlaceholder placeholder='-- Enter Project Details --' />
          </EmptyContainer>
        )

        // Render a distinct, separate block wrapper for every index item
        return <RenderingContainer>
          <Bullet />
          <ProjectBlock key={index} proj={proj} />
        </RenderingContainer>
      })}
    </MainPrintingDiv>
  )
}

export default Projects