import React from 'react'
import FormError from '../FormAuxiliaries/FormError';

const DateEntry = (props) => {
  const fieldError = props.formState?.errors && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.errors);
  const isTouched = props.formState?.touchedFields && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.touchedFields);
  const isSubmitted = props.formState?.isSubmitted;

  // FIX APPLIED: Only show error if the field was touched OR the user tried to submit the whole form
  const shouldShowError = !!fieldError && (isTouched || isSubmitted);
  return (
    <div className={'w-full flex flex-col ' + (props.className || "")}>
      <input
        className={`border-solid border h-8 w-full rounded-md p-2 text-white disabled:text-white/30 disabled:bg-transparent disabled:cursor-not-allowed disabled:placeholder:text-white/30
  ${!shouldShowError
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
      {shouldShowError && <FormError name={props.item} errors={props.errors} />}
    </div>
  )
}

export default DateEntry