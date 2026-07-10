import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import FieldContainer from '../HeaderContainers/FieldContainer'

const Organisation = (props) => {
    const {Data, setData,liveData}=useContext(DataContext)
  return (
    <FieldContainer className={props.className || ""}>
    {liveData.currOrg}
    </FieldContainer>
  )
}

export default Organisation