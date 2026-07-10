import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import FieldContainer from '../HeaderContainers/FieldContainer'

const Name = (props) => {
    const {liveData}=useContext(DataContext)
  return (
    <FieldContainer className={'font-bold ' + (props.className || "")}>
      {liveData.firstname} {liveData.lastname}
    </FieldContainer>
  )
}

export default Name