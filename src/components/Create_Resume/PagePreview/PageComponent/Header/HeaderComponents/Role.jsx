import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'

const Role = (props) => {
  const { Data, setData, liveData } = useContext(DataContext)
  return (
    <TextFieldContainer className={'font-[Lora] '+ props.className || ""}>
      {liveData.currRole}
    </TextFieldContainer>
  )
}

export default Role