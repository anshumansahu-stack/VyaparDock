import React from 'react'
import FormError from '../FormAuxiliaries/FormError';
const TextAreaEntry = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Stop standard newline
      const { selectionStart, value } = e.target;

      // Insert a newline followed by a bullet point
      const before = value.substring(0, selectionStart);
      const after = value.substring(selectionStart);
      const newValue = before + "\n– " + after; //before value, enter then after value.

      e.target.value = newValue;
      // Put cursor right after the new "-"
      e.target.selectionStart = e.target.selectionEnd = selectionStart + 3;
    }
  };

  const handleFocus = (e) => {
    // If the box is empty, start it with a bullet point immediately
    if (e.target.value === "") {
      e.target.value = "– ";
    }
  };

  const fieldError = props.formState?.errors && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.errors);
  const isTouched = props.formState?.touchedFields && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.touchedFields);
  const hasGlobalErrors = props.formState?.errors && Object.keys(props.formState.errors).length > 0; // Are any active errors loaded in the formstate dictionary?

  const shouldShowError = !!fieldError && (isTouched || hasGlobalErrors);
  return (
    <div className={'w-full flex flex-col ' + (props.className || "")}>
      <textarea
        className={`border-solid border min-h-full overflow-y-scroll no-scrollbar w-full rounded-md p-2 text-white disabled:text-white/30 disabled:bg-transparent disabled:cursor-not-allowed disabled:placeholder:text-white/30
  ${!shouldShowError
            ? 'border-white bg-white/10 placeholder:text-gray-400'
            : 'border-red-600 bg-red-400/10 placeholder:text-red-400 ring-1 ring-red-600'
          } ${props.childclassName || ""}`}
        {...props.register(props.item, props.validation || {})}
        placeholder={props.placeholder}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
      {shouldShowError && <FormError name={props.item} errors={props.formState.errors} />}
    </div>
  )
}

export default TextAreaEntry