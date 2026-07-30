import React from 'react'
const TextAreaEntry = (props) => {
  
  return (
      <textarea className={`flex flex-col border-solid border overflow-y-scroll no-scrollbar w-full rounded-xl p-2 text-white bg-white/20 ${props.className || ""}`}
        placeholder={props.placeholder}
        id={props.id}
      />
  )
}

export default TextAreaEntry