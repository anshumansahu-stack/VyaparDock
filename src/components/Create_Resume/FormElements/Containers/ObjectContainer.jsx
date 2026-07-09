import React from 'react'

const ObjectContainer = (props) => {
  return (
    <div className={'relative flex flex-col border border-white bg-white/5 gap-5 p-5 rounded-xl '+props.className}>
        {props.children}
    </div>
  )
}

export default ObjectContainer