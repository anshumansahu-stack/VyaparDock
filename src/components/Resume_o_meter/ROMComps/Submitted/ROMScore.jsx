import React from 'react'

const ROMScore = (props) => {
  
  return (
    <div className='row-start-1 col-start-1 z-30 flex items-center justify-center font-[Poppins] font-semibold text-[50px] text-white left-[42%] bottom-[26%] h-full'>
      {props.obtainedScore}
    </div>
  )
}

export default ROMScore