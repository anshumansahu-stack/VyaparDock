import React from 'react'
import FormError from '../FormAuxiliaries/FormError'
const TextEntry = (props) => {
   const hasError = props.errors && props.item.split('.').reduce((obj, key) => obj?.[key], props.errors);
   // If the form has no errors, hasError=undefined. If it is, It will find the error in the particular component in the form errors object by index parsing and searching through the object.
  return (
    <div className={'flex flex-col ' +(props.className || "")}>
      <input className={
        !hasError?"border-solid border-white bg-white/10 border h-8 w-full rounded-md placeholder:text-gray-400 p-2 text-white " + (props.childclassName || ""):"border-solid border-red-600 bg-red-400/10 border h-8 w-full rounded-md placeholder:text-red-400 p-2 text-white " + (props.childclassName || "")
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