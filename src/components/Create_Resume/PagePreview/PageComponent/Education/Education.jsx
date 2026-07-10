import React from 'react'
import Separator from '../../PageAuxiliaries/Separator'
import TitleField from '../../PageAuxiliaries/TitleField'
import EduBlock from './EduComps/EduBlock'

const Education = () => {
  return (
    <div className='text-black flex flex-col items-start'>
        <TitleField title='Education'/>
        <Separator/>
        <EduBlock/>
    </div>
  )
}

export default Education