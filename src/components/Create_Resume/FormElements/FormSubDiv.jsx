import React from 'react'

const FormSubDiv = (props) => {
  return (
    <div className={'flex gap-2 min-h-10 w-85  items-center justify-start '+ props.className}>
        {props.children}
    </div>
  )
}

export default FormSubDiv