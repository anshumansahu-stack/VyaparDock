import React from 'react'

const Column = (props) => {
  return (
    <div className={` h-full min-w-1/2 p-2  ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default Column