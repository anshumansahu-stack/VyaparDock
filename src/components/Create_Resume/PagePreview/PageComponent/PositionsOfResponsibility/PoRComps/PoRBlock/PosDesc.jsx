import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const PosDesc = (props) => {
  const DescVal = typeof props.por?.posdescription === 'string' ? props.por.posdescription.trim() : ''; // Avoid react not an object error
  return (
    <TextFieldContainer 
    className={'font-[Ibarra_Real_Nova] text-[17px]! text-left whitespace-pre-line leading-relaxed  ' + (props.className || '')}
    >
      {DescVal ? DescVal : ""}
    </TextFieldContainer>
  )
}

export default PosDesc

// whitespace-pre-line is for newline entry and leading-relaxed is to make the space 162.5% of the font size for enough spacing, to distinguish the box as a textbox.