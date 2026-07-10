import React from 'react'
import FormError from '../FormAuxiliaries/FormError'
const TextEntry = (props) => {
  const errorObj = props.errors && props.item.split('.').reduce((obj, key) => obj?.[key], props.errors); // I was passing the specific error object as hasErrors.
  // Now i need to check whether it is touched or not.
  const isTouched = props.touchedFields && props.item.split('.').reduce((obj, key) => obj?.[key], props.touchedFields);

  const hasError = errorObj && (isTouched || Object.keys(props.errors).length > 0); // The error object and is touched or there is some nonzero error.
  // If the form has no errors, hasError=undefined. If it is, It will find the error in the particular component in the form errors object by index parsing and searching through the object.
  // Same logic applied to all entry fields.
  return (
    <div className={'flex flex-col ' + (props.className || "")}>
      <input className={`border-solid border h-8 w-full rounded-md p-2 text-white disabled:text-white/30 disabled:bg-transparent disabled:cursor-not-allowed disabled:placeholder:text-white/30
  ${!hasError
          ? 'border-white bg-white/10 placeholder:text-gray-400'
          : 'border-red-600 bg-red-400/10 placeholder:text-red-400 ring-1 ring-red-600'
        } ${props.childclassName || ""}`}
        type="text"
        {...props.register(props.item, props.validation || {})} // if theres any validation, render that else render an empty object.
        disabled={props.disabled}
        touchedFields={props.touchedFields}
        placeholder={props.disabled?'Not Applicable':props.placeholder}
      />
      <FormError name={props.item} errors={props.errors} />
    </div>
  )
}

export default TextEntry

/*
PROBLEM: Auto-trigger() of form error fields while appending a new block:
Initial: With no guard, As i added a new form the trigger() would automatically run as the form appended new fields to the existing form, triggering red fields all when a new block is added.
Fix 1: Added ClearErrors Function without the set timeout before appending all the fields. Didnt work, The errors trigger was still triggering after the append.
Fix 2: added a clearErrors function of the form hook with a set Timeout so that the form clears all the errors after a fresh append.
Problem with fix 1: Due to the setTimeout Property, All the errors were visible for a split second as the new block was appended. Bruteforce fix.
Fix 3: added a touchedFields Property of the form hook. To verify which fields have been freshly touched.
Logic applied: if the object is included in an error object, and is touched or has some lingering errors, then show its an error.
Problem: The form always had lingering errors from the start. The logic evaluated to be true always, and it did not fix.
Fix 4: use the isDirty Flag.
*/