import React from 'react'
import FormError from '../FormAuxiliaries/FormError';

const DateEntry = (props) => {
  const errorObj = props.errors && props.item.split('.').reduce((obj, key) => obj?.[key], props.errors); // I was passing the specific error object as hasErrors.
  // Now i need to check whether it is touched or not.
  const isTouched = props.touchedFields && props.item.split('.').reduce((obj, key) => obj?.[key], props.touchedFields);

  const hasError = errorObj && (isTouched || Object.keys(props.errors).length > 0); // The error object and is touched or there is some nonzero error.
  return (
    <div className={'w-full flex flex-col ' + (props.className || "")}>
      <input
        className={`border-solid border h-8 w-full rounded-md p-2 text-white disabled:text-white/30 disabled:bg-transparent disabled:cursor-not-allowed disabled:placeholder:text-white/30
  ${!hasError
            ? 'border-white bg-white/10 placeholder:text-gray-400'
            : 'border-red-600 bg-red-400/10 placeholder:text-red-400 ring-1 ring-red-600'
          } ${props.childclassName || ""}`}
        type={props.disabled ? "text" : "date"}
        {...props.register(props.item, props.validation || {})}
        placeholder={props.placeholder}
        disabled={props.disabled}
        touchedFields={props.touchedFields}
        onFocus={(e) => {
          if (props.disabled) return;
          e.target.type = "date";
        }}
        onBlur={(e) => {
          if (props.disabled) return;
          if (!e.target.value) e.target.type = "text";
        }} // Flips to a date picker on focus
      />
      <FormError name={props.item} errors={props.errors} />
    </div>
  )
}

export default DateEntry