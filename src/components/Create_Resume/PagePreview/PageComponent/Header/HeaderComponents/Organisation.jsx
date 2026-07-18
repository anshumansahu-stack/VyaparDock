import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'

const Organisation = (props) => {
    const {Data, setData,liveData}=useContext(DataContext)
  return (
    <TextFieldContainer className={'font-[Lora] '+props.className || ""}>
    {liveData.currOrg}
    </TextFieldContainer>
  )
}

export default Organisation