import React from 'react'
import FormError from '../FormAuxiliaries/FormError'
const TextEntry = (props) => {
 const fieldError = props.formState?.errors && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.errors);
  const isTouched = props.formState?.touchedFields && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.touchedFields);
  const isSubmitted = props.formState?.isSubmitted;

  // FIX APPLIED: Only show error if the field was touched OR the user tried to submit the whole form
  const shouldShowError = !!fieldError && (isTouched || isSubmitted);
  // Same logic applied to all entry fields. formstate is forwarded as props from the text wrappers.
  return (
    <div className={'flex flex-col ' + (props.className || "")}>
      <input className={`border-solid border h-8 w-full rounded-md p-2 text-white disabled:text-white/30 disabled:bg-transparent disabled:cursor-not-allowed disabled:placeholder:text-white/30
  ${!shouldShowError
          ? 'border-white bg-white/10 placeholder:text-gray-400'
          : 'border-red-600 bg-red-400/10 placeholder:text-red-400 ring-1 ring-red-600'
        } ${props.childclassName || ""}`}
        type="text"
        {...props.register(props.item, props.validation || {})} // if theres any validation, render that else render an empty object.
        touchedFields={props.touchedFields}
        placeholder={props.placeholder}
      />
      {shouldShowError && <FormError name={props.item} errors={props.formState.errors} />}
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

Fix 4: use the isDirty Flag. failed.

Fix 5: Figured out that the button is submitting by a default action. Added prevent default on the Add new button's onclick so that the default submit action is stopped and the errors stop firing on a new addition. Falled back to Fix 3's methods and this approach. Fixed.
*/