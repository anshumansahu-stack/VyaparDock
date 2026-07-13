import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const Board = (props) => {
  const BoardVal = typeof props.edu?.studyboard === 'string' ? props.edu.studyboard.trim() : ''; // Avoid react not an object error
  return (
    <TextFieldContainer className='font-[Ibarra_Real_Nova] italic'>
      {BoardVal ? BoardVal : ""} 
    </TextFieldContainer>
    )
}

export default Board