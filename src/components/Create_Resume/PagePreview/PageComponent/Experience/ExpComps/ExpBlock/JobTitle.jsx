import React from 'react'
import ExpContainer from '../ExpContainers/ExpContainer';

const JobTitle = (props) => {
  const orgName = typeof props.exp?.jobtitle === 'string' ? props.exp.jobtitle.trim() : '';
  return (
    <ExpContainer className='font-[Ibarra_Real_Nova] italic'>
      {orgName ? orgName : ""} 
    </ExpContainer>
    )
}

export default JobTitle