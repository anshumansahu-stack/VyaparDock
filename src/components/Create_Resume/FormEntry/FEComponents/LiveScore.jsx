import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import ProgressionBar from './ProgressionBar/ProgressionBar'
import { DataContext } from '../../DataContext'

const LiveScore = () => {
  const {currentIndex,totalSteps}=useContext(DataContext)
  const currSteps=totalSteps-1
  const completionPercentage = (totalSteps > 0 ? (currentIndex / currSteps) * 100 : 0 ).toFixed(2)// Will never show a 100% completion

  const location=useLocation()
  const isLastIndex=location.pathname.endsWith('/view_form')
  return (
    <div className={"backdrop-blur-md bg-black/50 w-full h-3/20 rounded-t-2xl flex flex-col justify-center items-left font-['Freeman'] font-bold text-[43px] text-center text-indigo-100 relative " + (isLastIndex? 'h-[21vh] print:hidden' :'')} >
      Resume Progress: {completionPercentage}%
      <ProgressionBar></ProgressionBar>
    </div>
  )
}

export default LiveScore