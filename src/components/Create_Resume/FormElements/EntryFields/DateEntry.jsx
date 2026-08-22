// import React from 'react'
// import FormError from '../FormAuxiliaries/FormError';

// const DateEntry = (props) => {
//   const fieldError = props.formState?.errors && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.errors);
//   const isTouched = props.formState?.touchedFields && props.item.split('.').reduce((obj, key) => obj?.[key], props.formState.touchedFields);
//   const hasGlobalErrors = props.formState?.errors && Object.keys(props.formState.errors).length > 0; // Are any active errors loaded in the formstate dictionary?

//   const shouldShowError = !!fieldError && (isTouched || hasGlobalErrors);
//   return (
//     <div className={'w-full flex flex-col ' + (props.className || "")}>
//       <input
//         className={`border-solid border h-8 w-full rounded-md p-2 text-white disabled:text-white/30 disabled:bg-transparent disabled:cursor-not-allowed disabled:placeholder:text-white/30
//   ${!shouldShowError
//             ? 'border-white bg-white/10 placeholder:text-gray-400'
//             : 'border-red-600 bg-red-400/10 placeholder:text-red-400 ring-1 ring-red-600'
//           } ${props.childclassName || ""}`}
//         type={props.disabled ? "text" : "date"}
//         {...props.register(props.item, props.validation || {})}
//         placeholder={props.placeholder}
//         disabled={props.disabled}
//         onFocus={(e) => {
//           if (props.disabled) return;
//           e.target.type = "date";
//         }}
//         onBlur={(e) => {
//           if (props.disabled) return;
//           if (!e.target.value) e.target.type = "text";
//         }} // Flips to a date picker on focus
//       />
//       {shouldShowError && <FormError name={props.item} errors={props.formState.errors} />}
//     </div>
//   )
// }

// export default DateEntry

import React from 'react'
import { Controller } from 'react-hook-form'
import FormError from '../FormAuxiliaries/FormError';

const DateEntry = (props) => {
  return (
    <Controller
      name={props.item}
      control={props.control}
      rules={props.validation || {}}
      render={({ field, fieldState }) => {

        const fieldError = fieldState.error;
        const isTouched = fieldState.isTouched;
        const hasGlobalErrors = props.formState?.errors && Object.keys(props.formState.errors).length > 0;
        const shouldShowError = !!fieldError && (isTouched || hasGlobalErrors);

        return (
          <div className={'w-full flex flex-col ' + (props.className || "")}>
            <input
              className={`border-solid border h-8 w-full rounded-md p-2 text-white disabled:text-white/30 disabled:bg-transparent disabled:cursor-not-allowed disabled:placeholder:text-white/30
                ${!shouldShowError
                  ? 'border-white bg-white/10 placeholder:text-gray-400'
                  : 'border-red-600 bg-red-400/10 placeholder:text-red-400 ring-1 ring-red-600'
                } ${props.childclassName || ""}`}
              type={props.disabled ? "text" : "date"}
              value={field.value ?? ''}
              onChange={field.onChange}
              onBlur={(e) => {
                field.onBlur();
                if (props.disabled) return;
                if (!e.target.value) e.target.type = "text";
              }}
              onFocus={(e) => {
                if (props.disabled) return;
                e.target.type = "date";
              }}
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

export default DateEntry