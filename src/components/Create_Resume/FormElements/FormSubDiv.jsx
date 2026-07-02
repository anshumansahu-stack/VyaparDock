import React from 'react'

const FormSubDiv = (props) => {
  return (
    <div className={'flex gap-2 min-h-10 w-90 items-center justify-between '+ props.className}>
        {props.children}
    </div>
  )
}

export default FormSubDiv