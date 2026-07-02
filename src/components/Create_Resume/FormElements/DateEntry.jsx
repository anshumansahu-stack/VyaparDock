import React from 'react'

const DateEntry = (props) => {
  return (
    <input className="border-solid border-white border h-8 w-40 rounded-md placeholder:text-gray-400 p-2" type="text" {...props.register(props.item)} placeholder={props.placeholder} onFocus={(e) => (e.target.type = "date")} // Flips to a date picker on focus
      onBlur={(e) => {
        if (!e.target.value) e.target.type = "text"; // Flips back if empty
      }}/>
  )
}

export default DateEntry