import React from 'react'
import FormError from '../FormAuxiliaries/FormError';

const DateEntry = (props) => {
  return (
    <div className={'w-full flex flex-col ' + (props.className || "")}>
      <input
        className="border-solid border-white border h-8 max-w-38 text-white rounded-md placeholder:text-gray-400 p-2 disabled:text-white/30 disabled:cursor-not-allowed "
        type={props.disabled ? "text" : "date"}
        {...props.register(props.item, props.validation || {})}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onFocus={(e) => {
          if (props.disabled) return;
          e.target.type = "date";
        }}
        onBlur={(e) => {
          if (props.disabled) return;
          if (!e.target.value) e.target.type = "text";
        }} // Flips to a date picker on focus
      />
      <FormError name={props.item}/>
    </div>
  )
}

export default DateEntry