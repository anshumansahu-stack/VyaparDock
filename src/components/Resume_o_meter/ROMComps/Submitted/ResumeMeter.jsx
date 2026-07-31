import React from 'react'
import hook from '../../../../assets/ResumeOMeter/hook.png'
import meter from '../../../../assets/ResumeOMeter/meter.png'
import ROMScore from './ROMScore'
import { useContext } from 'react'
import { ROMContext } from '../../ROMContext'

const ResumeMeter = () => {
  let { obtainedScore } = useContext(ROMContext);
  if(obtainedScore<0 || obtainedScore>10){
    obtainedScore=0;
  }
  const leftRange = 120;
  const rightRange = 120;
  const totalSpan = leftRange + rightRange;
  const rotateVal = (obtainedScore / 10) * totalSpan;
  let ActualRotation = 0;
  let counterClockwise = true;
  if (rotateVal < leftRange) {
    ActualRotation = Math.ceil(leftRange - rotateVal);
  }
  else {
    counterClockwise = false;
    ActualRotation = Math.ceil(rotateVal - rightRange);
  }
  console.log(counterClockwise, rotateVal, ActualRotation)
  return (
    <div
      className={` grid grid-rows-1 grid-cols-1 bg-cover bg-center bg-no-repeat relative`} >
      <img 
      src={meter}
      alt='meter'
      className='col-start-1 row-start-1 z-10 h-35 w-auto'
      />
      <img 
      src={hook} 
      alt='hook' 
      style={{ transform: `rotate(${counterClockwise ? -ActualRotation : ActualRotation}deg)` }} 
      className={`col-start-1 row-start-1 z-20 h-22 w-auto absolute bottom-13 left-19.5 transition duration-500 ease-in-out origin-[50%_94.7%]
      `}/>
      <ROMScore obtainedScore={obtainedScore} />
    </div>
  )
}

export default ResumeMeter