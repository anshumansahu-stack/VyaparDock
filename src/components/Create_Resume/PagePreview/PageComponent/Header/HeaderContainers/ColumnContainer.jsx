import React from 'react'

const ColumnContainer = (props) => {
  return (
    <div className={'min-h-3.9 min-w-15 flex flex-col '+(props.className || "")}>
        {props.children}
        </div>
  )
}

export default ColumnContainer