import React from 'react'
import Bullet from '../../../PageAuxiliaries/Bullet'
import NameOfOrg from './EduBlock/NameOfOrg'
import Degree from './EduBlock/Degree'
import Board from './EduBlock/Board'
import DateBlock from './EduBlock/DateBlock'
import GradeBlock from './EduBlock/GradeBlock'

const EduBlock = () => {
  return (
    <div className='flex justify-between w-full'>
      <div className='flex flex-col items-start justify-center'>
        <div className='flex items-center gap-2'>
          <Bullet />
          <NameOfOrg />
        </div>
        <div className='flex items-center gap-2'>
          <Degree />
          <Board />
        </div>
      </div>
      <div className='flex flex-col items-end justify-center'>
          <DateBlock/>
          <GradeBlock/>
      </div>
    </div>
  )
}

export default EduBlock