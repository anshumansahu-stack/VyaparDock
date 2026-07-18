import React from 'react'
import NameOfOrg from './EduBlock/NameOfOrg'
import Degree from './EduBlock/Degree'
import Board from './EduBlock/Board'
import DateBlock from './EduBlock/DateBlock'
import GradeBlock from './EduBlock/GradeBlock'

const EduBlock = (props) => {
  return (
    <div className='flex justify-between w-full pt-[0.5cqw]'>
      <div className='flex flex-col items-start justify-center '>
        <div className='flex items-center gap-[1cqw] min-h-0'>
          <NameOfOrg edu={props.edu}/>
        </div>
        <div className='flex items-center justify-end min-w-[10.7cqw] min-h-0 gap-[0.5cqw]'>
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