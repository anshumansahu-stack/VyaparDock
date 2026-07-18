import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const Position = (props) => {
  const posName = typeof props.por?.position === 'string' ? props.por.position.trim() : ''; // If the background validation mechanism, say passes a nested error object down here, or just something not a string, javascript wont abruptly crash.
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova] font-bold'>
      {posName ? '• '+posName : ""} 
    </TextFieldContainer>
    )
}

export default Position