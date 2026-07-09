import React, { useContext } from 'react'
import ProgressionBar from './ProgressionBar/ProgressionBar'
import { DataContext } from '../../DataContext'

const LiveScore = () => {
  const {currentIndex,totalSteps}=useContext(DataContext)
  const completionPercentage = (totalSteps > 0 ? (currentIndex / totalSteps) * 100 : 0 ).toFixed(2)// Will never show a 100% completion
  return (
    <div className="backdrop-blur-md bg-black/50 w-full h-3/20 rounded-t-2xl flex flex-col justify-center items-left font-['Freeman'] font-bold text-[43px] text-center text-indigo-100 relative ">
      Resume Progress: {completionPercentage}%
      <ProgressionBar></ProgressionBar>
    </div>
  )
}

export default LiveScore