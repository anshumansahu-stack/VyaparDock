import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const NameOfOrg = (props) => {
  const orgName = typeof props.edu?.organisation === 'string' ? props.edu.organisation.trim() : '';
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova] font-bold'>
      {orgName ? orgName : ""} 
    </TextFieldContainer>
    )
}

export default NameOfOrg