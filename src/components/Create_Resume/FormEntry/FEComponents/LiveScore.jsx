import React, { useContext } from 'react'
import ProgressionBar from './ProgressionBar/ProgressionBar'
import { DataContext } from '../../DataContext'

const LiveScore = (props) => {
  const {currentIndex,totalSteps}=useContext(DataContext)
  const currSteps=totalSteps-1
  const completionPercentage = (totalSteps > 0 ? (currentIndex / currSteps) * 100 : 0 ).toFixed(2)// Will never show a 100% completion, except viewForm

  return (
    <div className={" bg-black/50 w-full min-h-3/20 rounded-t-2xl flex flex-col justify-center items-left font-['Freeman'] font-bold text-[43px] text-center text-indigo-100 relative print:hidden " + (props.className || '')} >
      Resume Progress: {completionPercentage}%
      <ProgressionBar></ProgressionBar>
    </div>
  )
}

export default LiveScore