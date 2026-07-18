import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const Employer = (props) => {
  const EmpVal = typeof props.exp?.employer === 'string' ? props.exp.employer.trim() : '';
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova] font-bold'>
      {EmpVal ? '• '+EmpVal : ""} 
    </TextFieldContainer>
    )
}

export default Employer