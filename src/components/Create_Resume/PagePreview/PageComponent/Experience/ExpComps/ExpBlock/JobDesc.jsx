import React from 'react'
import ExpContainer from '../ExpContainers/ExpContainer'

const JobDesc = (props) => {
  const DescVal = typeof props.exp?.jobdescription === 'string' ? props.exp.jobdescription.trim() : ''; // Avoid react not an object error
  return (
    <ExpContainer 
    className={'font-[Ibarra_Real_Nova] text-[17px]! text-left whitespace-pre-line leading-relaxed  ' + (props.className || '')}
    >
      {DescVal ? DescVal : ""}
    </ExpContainer>
  )
}

export default JobDesc