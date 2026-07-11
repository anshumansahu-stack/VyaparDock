import React from 'react'
import ExpContainer from '../ExpContainers/ExpContainer'

const Employer = (props) => {
  const EmpVal = typeof props.exp?.employer === 'string' ? props.exp.employer.trim() : '';
  return (
    <ExpContainer className='font-[Ibarra_Real_Nova] font-bold'>
      {EmpVal ? EmpVal : ""} 
    </ExpContainer>
    )
}

export default Employer