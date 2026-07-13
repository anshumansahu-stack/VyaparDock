import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const Organisation = (props) => {
  const OrgVal = typeof props.por?.organisation === 'string' ? props.por.organisation.trim() : '';
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova] italic'>
      {OrgVal ? OrgVal : ""} 
    </TextFieldContainer>
    )
}

export default Organisation