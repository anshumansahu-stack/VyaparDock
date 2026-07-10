import React from 'react'
import FormError from '../FormAuxiliaries/FormError'
const TextAreaEntry = (props) => {
  return (
    <div className={'w-full flex flex-col ' + (props.className || "")}>
      <textarea
        className="border-solid border-white border h-full w-full rounded-md placeholder:text-gray-400 p-2 text-white "
        {...props.register(props.item, props.validation || {})}
        placeholder={props.placeholder} />
      <FormError 
      name={props.item} 
      errors={props.errors}/>
    </div>
  )
}

export default TextAreaEntry