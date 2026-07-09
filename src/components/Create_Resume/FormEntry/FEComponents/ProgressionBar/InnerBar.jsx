import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'

const InnerBar = () => {
  const {currentIndex,totalSteps}=useContext(DataContext)
  const percentage = totalSteps > 0 ? (currentIndex / totalSteps) * 100 : 0 
  let className=''
  if(currentIndex<=1){
    className='bg-red-600 h-full'
  }
  else if(currentIndex>1 && currentIndex<=3){
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