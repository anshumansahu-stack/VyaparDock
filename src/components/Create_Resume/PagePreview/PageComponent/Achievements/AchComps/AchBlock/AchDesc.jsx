import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const AchDesc = (props) => {
  const achDesc = typeof props.achLi?.achdesc === 'string' ? props.achLi.achdesc.trim() : '';
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova] text-left '>
      
    </TextFieldContainer>
    )
}

export default AchDesc