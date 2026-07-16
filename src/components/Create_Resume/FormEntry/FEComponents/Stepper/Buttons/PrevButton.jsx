import React from 'react'
import ButtonLayout from './ButtonLayout'

const PrevButton = (props) => {
  return (
    <ButtonLayout onClick={props.onClick}>
      ← Prev
    </ButtonLayout>
  )
}

export default PrevButton