import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';
const AddressBlock = (props) => {
  const StateVal = typeof props.exp?.jobstate === 'string' ? props.exp.jobstate.trim() : ''; // Avoid react not an object error
  const CityVal = typeof props.exp?.jobcity === 'string' ? props.exp.jobcity.trim() : ''; // Avoid react not an object error
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova]'>
      {CityVal ? CityVal : ""} 
      {CityVal && StateVal ? " , " : ""}
      {StateVal ? StateVal : ""} 
    </TextFieldContainer>
  )
}

export default AddressBlock