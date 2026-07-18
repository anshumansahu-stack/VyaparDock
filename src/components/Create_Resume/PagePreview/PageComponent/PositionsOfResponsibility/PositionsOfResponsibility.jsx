import React, {useContext} from 'react'
import { DataContext } from '../../../DataContext'
import Separator from '../../PageAuxiliaries/Separator'
import TitleField from '../../PageAuxiliaries/TitleField'
import PoRBlock from './PoRComps/PoRBlock'
import Bullet from '../../PageAuxiliaries/Bullet'
import EmptyContainer from '../../PageAuxiliaries/EmptyContainer'
import EmptyPlaceholder from '../../PageAuxiliaries/EmptyPlaceholder'
import RenderingContainer from '../../PageAuxiliaries/RenderingContainer'
import MainPrintingDiv from '../../PageAuxiliaries/MainPrintingDiv'

const PositionsOfResponsibility = () => {
  const { liveData, currentIndex, FORM_STEPS} = useContext(DataContext)
  const PoRlist = liveData?.responsibilities || []

  const hasRealContent = PoRlist.some(por =>
    por.position || por.organisation || por.startDate || por.endDate  || por.posdescription
  )

  const stepIndex = FORM_STEPS.indexOf('positions_of_responsibility')
  
   if (currentIndex < stepIndex && !hasRealContent) return null; // If theres nothing to render and we are behind the current Index then return null.
  return (
    <MainPrintingDiv>
        <TitleField title='Positions of Responsibility'/>
        <Separator/>
        {PoRlist.map((por, index) => { // edu is basically the block to be rendered, We check if its empty and then put things on the screen.
          // Skip rendering if this specific row is empty
          const hasContent = por.position || por.organisation || por.startDate || por.endDate  || por.posdescription;
          if (!hasContent) return (
          <EmptyContainer key={index}>
            <Bullet />
            <EmptyPlaceholder placeholder='-- Enter PoR --'/>
          </EmptyContainer>)

          // Render a distinct, separate block wrapper for every index item
          return <RenderingContainer>
            <PoRBlock key={index} por={por} />
          </RenderingContainer>
        })}
    </MainPrintingDiv>
  )
}

export default PositionsOfResponsibility