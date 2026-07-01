import React from 'react'
const TextEntry = (props) => {
  return (
    <input className="border-solid border-white border h-8 w-40 rounded-md placeholder:text-gray-400 p-2" type="text" {...props.register(props.item)} placeholder={props.placeholder}/>
  )
}

export default TextEntry