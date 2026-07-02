import React from 'react'

const SubmitButton = (props) => {
  return (
    <button
      type="submit"
      className={`h-13 px-6 rounded-md bg-white text-slate-900 font-[Braah_One] tracking-wide 
                 hover:bg-gray-400 shadow-md border border-solid border-white text-l ${props.className}`}
    >
      Submit
    </button>
  )
}

export default SubmitButton
