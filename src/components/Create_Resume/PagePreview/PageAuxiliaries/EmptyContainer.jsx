import React from 'react'

const EmptyContainer = (props) => {
  return (
    <div key={props.key} className='flex w-full gap-[2cqh] items-center opacity-30 my-1 '>
        {props.children}
    </div>
  )
}

export default EmptyContainer