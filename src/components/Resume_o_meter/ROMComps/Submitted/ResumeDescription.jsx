import React from 'react'
import { useContext } from 'react'
import { ROMContext } from '../../ROMContext'
const ResumeDescription = () => {
  // We will be showing percentage in both ROM and this description.
  let { obtainedScore } = useContext(ROMContext)
  let renderColor='';
  if(obtainedScore<3.3){
    renderColor='red'
  }
  else if(obtainedScore>=3.3 && obtainedScore<6.7){
    renderColor='yellow'
  }
  else{
    renderColor='green'
  }
  return (
      <div className=' w-3/5 flex items-center justify-center h-full'>
        <p 
      className='  font-[Poppins] text-[23px] w-full text-white text-center'
      >
        Your Resume is <span className='font-bold' style={{color:renderColor}}>{obtainedScore}</span>% suitable for the job you have mentioned.
      </p>
      </div>
  )
}

export default ResumeDescription