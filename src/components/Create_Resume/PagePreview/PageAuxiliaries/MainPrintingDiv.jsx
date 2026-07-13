import React from 'react'

const MainPrintingDiv = (props) => {
  return (
    <div className='text-black flex flex-col items-start break-inside-avoid'>
        {props.children}
    </div>
  )
}

export default MainPrintingDiv