import React from 'react'
const TextAreaEntry = (props) => {
  return (
    <textarea className={"border-solid border-white border h-full w-full rounded-md placeholder:text-gray-400 p-2 text-white "+props.className} {...props.register(props.item)} placeholder={props.placeholder}/>
  )
}

export default TextAreaEntry