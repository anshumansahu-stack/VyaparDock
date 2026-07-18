import React from 'react'
import TextFieldContainer from './TextFieldContainer'
const TitleField = (props) => {
  return (
    <TextFieldContainer className={'uppercase font-[EB_Garamond] font-bold ' + (props.className || '')}>
      {props.title}
    </TextFieldContainer>
  )
}

export default TitleField