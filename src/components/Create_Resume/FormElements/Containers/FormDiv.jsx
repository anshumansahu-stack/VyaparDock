import React from 'react'

const FormDiv = (props) => {
  return (
    <div className={'flex flex-col items-start gap-10 '+props.className}>
        {props.children}
    </div>
  )
}

export default FormDiv