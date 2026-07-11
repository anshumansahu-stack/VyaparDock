import React from 'react'
import EduContainer from '../EduContainers/EduContainer'

const Board = (props) => {
  const BoardVal = typeof props.edu?.studyboard === 'string' ? props.edu.studyboard.trim() : ''; // Avoid react not an object error
  return (
    <EduContainer className='font-[Ibarra_Real_Nova] italic'>
      {BoardVal ? BoardVal : ""} 
    </EduContainer>
    )
}

export default Board