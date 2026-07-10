import React from 'react'

const FieldContainer = (props) => {
  return (
    <div className={"text-black font-[Lora] text-[20px] min-h-1.25 min-w-35 flex items-center gap-1 " + props.className}>
        {props.children}
    </div>
  )
}

export default FieldContainer