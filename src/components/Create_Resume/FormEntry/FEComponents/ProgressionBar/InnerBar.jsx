import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'

const InnerBar = () => {
  const {currentIndex,totalSteps}=useContext(DataContext)
  const currSteps=totalSteps-1
  const percentage = totalSteps > 0 ? (currentIndex / (currSteps)) * 100 : 0 
  let className=''
  if(currentIndex<=(currSteps/3)){
    className='bg-red-600 h-full'
  }
  else if(currentIndex>(currSteps/3) && currentIndex<=(2*currSteps/3)){
    className='bg-amber-300 h-full'
  }
  else{
    className='bg-green-600 h-full'
  }
  return (
    <div 
    style={{ width: `${percentage}%` }} 
    className={className}
    ></div>
  )
}

export default InnerBar