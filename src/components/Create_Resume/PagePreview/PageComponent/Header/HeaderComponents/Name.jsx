import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'

const Name = (props) => {
    const {liveData}=useContext(DataContext)
  return (
    <TextFieldContainer className={'font-bold font-[Lora] ' + (props.className || "")}>
      {liveData.firstname} {liveData.lastname}
    </TextFieldContainer>
  )
}

export default Name