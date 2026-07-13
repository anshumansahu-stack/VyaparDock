import React from 'react'
import NameOfCategory from './SkillBlock/NameOfCategory'
import Skills from './SkillBlock/Skills'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'

const SkillBlock = (props) => {
  return (
    <div className='flex justify-start gap-2 w-full pt-2'>
          <NameOfCategory tecSk={props.tecSk}/>
          <Skills tecSk={props.tecSk}/>
    </div>
  )
}

export default SkillBlock