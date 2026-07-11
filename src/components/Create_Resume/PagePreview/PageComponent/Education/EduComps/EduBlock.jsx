import React from 'react'
import NameOfOrg from './EduBlock/NameOfOrg'
import Degree from './EduBlock/Degree'
import Board from './EduBlock/Board'
import DateBlock from './EduBlock/DateBlock'
import GradeBlock from './EduBlock/GradeBlock'

const EduBlock = (props) => {
  return (
    <div className='flex justify-between w-full pt-2'>
      <div className='flex flex-col items-start justify-center'>
        <div className='flex items-center gap-2'>
          <NameOfOrg edu={props.edu}/>
        </div>
        <div className='flex items-center gap-2'>
          <Degree edu={props.edu}/>
          <Board edu={props.edu}/>
        </div>
      </div>
      <div className='flex flex-col items-end justify-center'>
          <DateBlock edu={props.edu}/>
          <GradeBlock edu={props.edu}/>
      </div>
    </div>
  )
}

export default EduBlock