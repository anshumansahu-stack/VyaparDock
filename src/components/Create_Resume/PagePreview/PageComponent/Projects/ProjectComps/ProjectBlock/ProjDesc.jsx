import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';
const ProjDesc = (props) => {
  const DescVal = typeof props.proj?.projectdescription === 'string' ? props.proj.projectdescription.trim() : ''; // Avoid react not an object error
  return (
    <TextFieldContainer 
    className={'font-[Ibarra_Real_Nova] text-left whitespace-pre-line leading-relaxed  ' + (props.className || '')}
    >
      {DescVal ? DescVal : ""} 
    </TextFieldContainer>
  )
}

export default ProjDesc