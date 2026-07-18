import React from 'react'

const ObjectContainer = (props) => {
  return (
    <div className={'relative flex flex-col border border-white bg-white/5 gap-5 border-box p-10 rounded-xl w-full '+props.className}>
        {props.children}
    </div>
  )
}

export default ObjectContainer