import React from 'react'
import FormError from '../FormAuxiliaries/FormError'
const TextEntry = (props) => {
  return (
    <div className={'flex flex-col ' +(props.className || "")}>
      <input className={
        "border-solid border-white border h-8 w-full rounded-md placeholder:text-gray-400 p-2 text-white " + (props.childclassName || "")
      }
        type="text"
        {...props.register(props.item, props.validation || {})} // if theres any validation, render that else render an empty object.
        placeholder={props.placeholder}
      />
      <FormError name={props.item}/>
    </div>
  )
}

export default TextEntry