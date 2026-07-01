import React from 'react'
const FormLabel = (props) => {
  return (
    <label className={'font-[Braah_One] text-[25px] text-white '+ props.className}>{props.label}</label>
  )
}

export default FormLabel