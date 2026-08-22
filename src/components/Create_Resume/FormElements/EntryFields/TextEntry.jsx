// import React from 'react'
// import FormError from '../FormAuxiliaries/FormError'
// const TextEntry = (props) => {
  // PREVIOUS LOGIC
  //   const fieldError = props.formState?.errors && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.errors);
  //   const isTouched = props.formState?.touchedFields && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.touchedFields);
//   const hasGlobalErrors = props.formState?.errors && Object.keys(props.formState.errors).length > 0;
//   const shouldShowError = !!fieldError && (isTouched || hasGlobalErrors);
//   return (
//     <div className={'flex flex-col ' + (props.className || "")}>
//       <input className={`border-solid border h-8 w-full rounded-md p-2 text-white disabled:text-white/30 disabled:bg-transparent disabled:cursor-not-allowed disabled:placeholder:text-white/30
//   ${!shouldShowError
//           ? 'border-white bg-white/10 placeholder:text-gray-400'
//           : 'border-red-600 bg-red-400/10 placeholder:text-red-400 ring-1 ring-red-600'
//         } ${props.childclassName || ""}`}
//         type="text"
//         {...props.register(props.item, props.validation || {})} 
//         placeholder={props.placeholder}
//       />
//       {shouldShowError && <FormError name={props.item} errors={props.formState.errors} />}
//     </div>
//   )
// }

// export default TextEntry

import React from 'react'
import { Controller } from 'react-hook-form'
import FormError from '../FormAuxiliaries/FormError'

const TextEntry = (props) => {
  return (
    <Controller
      name={props.item}
      control={props.control}
      rules={props.validation || {}}
      render={({ field, fieldState }) => {

        // Since we have fieldState now, the index-key searching logic(Commented below) is not required anymore.
        // no more manual .split('.').reduce(...) needed, Controller already scopes fieldState to THIS field specifically
        // PREVIOUS LOGIC
        //   const fieldError = props.formState?.errors && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.errors);
        //   const isTouched = props.formState?.touchedFields && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.touchedFields);
        const fieldError = fieldState.error;
        const isTouched = fieldState.isTouched;
        const hasGlobalErrors = props.formState?.errors && Object.keys(props.formState.errors).length > 0;
        const shouldShowError = !!fieldError && (isTouched || hasGlobalErrors);

        return (
          <div className={'flex flex-col ' + (props.className || "")}>
            <input
              className={`border-solid border h-8 w-full rounded-md p-2 text-white disabled:text-white/30 disabled:bg-transparent disabled:cursor-not-allowed disabled:placeholder:text-white/30
   ${!shouldShowError
                  ? 'border-white bg-white/10 placeholder:text-gray-400'
                  : 'border-red-600 bg-red-400/10 placeholder:text-red-400 ring-1 ring-red-600'
                } ${props.childclassName || ""}`}
              type="text"
              value={field.value ?? ''}
              onChange={field.onChange}
              onBlur={field.onBlur}
              placeholder={props.placeholder}
              disabled={props.disabled}
            />
            {shouldShowError && <FormError name={props.item} errors={props.formState.errors} />}
          </div>
        );
      }}
    />
  )
}

export default TextEntry