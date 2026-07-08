import React from 'react'

const DateEntry = (props) => {
  return (
    <input className={"border-solid border-white border h-8 w-40 text-white rounded-md placeholder:text-gray-400 p-2 disabled:text-white/30 disabled:cursor-not-allowed " + props.className} type={props.disabled ? "text" : "date"} {...props.register(props.item)} placeholder={props.placeholder} disabled={props.disabled} onFocus={(e) => {
        if (props.disabled) return;
        e.target.type = "date";
      }}
      onBlur={(e) => {
        if (props.disabled) return;
        if (!e.target.value) e.target.type = "text";
      }} // Flips to a date picker on focus
      onBlur={(e) => {
        if (!e.target.value) e.target.type = "text"; // Flips back if empty
      }}/>
  )
}

export default DateEntry