import React from 'react'

const RenderingContainer = (props) => {
  return (
    <div className='flex w-full gap-2'>
        {props.children}
    </div>
  )
}

export default RenderingContainer