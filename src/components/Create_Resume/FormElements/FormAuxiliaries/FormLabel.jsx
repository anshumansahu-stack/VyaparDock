import React from 'react'
const FormLabel = (props) => {
  return (
    <label className={'font-[Braah_One] text-[25px] text-white min-w-50 flex justify-start '+ props.className}>{props.label}</label>
  )
}

export default FormLabel