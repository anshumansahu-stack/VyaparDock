import React from 'react'
import InnerBar from './InnerBar'

const ProgressionBar = () => {
  return (
    <div className="bg-white w-full h-3 absolute bottom-0">
        <InnerBar></InnerBar>
    </div>
  )
}

export default ProgressionBar