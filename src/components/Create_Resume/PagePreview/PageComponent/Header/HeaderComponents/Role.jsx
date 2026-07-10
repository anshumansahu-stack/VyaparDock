import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import FieldContainer from '../HeaderContainers/FieldContainer'

const Role = (props) => {
  const { Data, setData, liveData } = useContext(DataContext)
  return (
    <FieldContainer className={props.className || ""}>
      {liveData.currRole}
    </FieldContainer>
  )
}

export default Role