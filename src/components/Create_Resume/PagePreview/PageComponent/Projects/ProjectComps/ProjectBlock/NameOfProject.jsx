import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const NameOfProject = (props) => {
  const projName = typeof props.proj?.projecttitle === 'string' ? props.proj.projecttitle.trim() : '';
  return (
    <TextFieldContainer className={'font-[Ibarra_Real_Nova] font-bold ' + (props.className || "")}>
      {projName ? projName : ""} 
    </TextFieldContainer>
    )
}

export default NameOfProject