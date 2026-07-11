import React from 'react'
import EduDummyContainer from '../EduContainers/EduContainer'
import EduContainer from '../EduContainers/EduContainer';

const NameOfOrg = (props) => {
  const orgName = typeof props.edu?.organisation === 'string' ? props.edu.organisation.trim() : '';
  return (
    <EduContainer className='font-[Ibarra_Real_Nova] font-bold'>
      {orgName ? orgName : ""} 
    </EduContainer>
    )
}

export default NameOfOrg