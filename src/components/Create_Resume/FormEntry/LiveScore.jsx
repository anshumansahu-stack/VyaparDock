import React from 'react'
import ProgressionBar from './ProgressionBar'

const LiveScore = () => {
  return (
    <div className="backdrop-blur-md bg-black/50 w-full h-3/20 rounded-t-2xl flex flex-col justify-center items-left font-['Freeman'] font-bold text-[43px] text-center text-indigo-100 relative ">
      Resume-o-meter Score: 50%
      <ProgressionBar></ProgressionBar>
    </div>
  )
}

export default LiveScore