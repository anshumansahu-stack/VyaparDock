import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const AchName = (props) => {
  const achName = typeof props.achLi?.achtitle === 'string' ? props.achLi.achtitle.trim() : '';
  return (
    <TextFieldContainer className={'font-[Ibarra_Real_Nova] font-bold w-max whitespace-nowrap'}> 
    {/* // Whitespace-nowrap prevents the text from wrapping onto a newline, since this is a title */}
      {achName ? achName + ' :' : ""} 
    </TextFieldContainer>
    )
}

export default AchName