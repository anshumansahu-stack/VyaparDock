import React from 'react'
import ButtonLayout from './ButtonLayout'

const EditData = (props) => {
  return (
    <ButtonLayout onClick={props.onClick}>
       ← Edit Form Data
    </ButtonLayout>
  )
}

export default EditData