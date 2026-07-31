import React from 'react'
import Tag from '../ROMAuxilliaries/Tag'
import TagContainer from '../ROMAuxilliaries/TagContainer'

const MissingSkills = () => {
  return (
    <div className=' min-h-1/7 max-h-1/6 flex items-center justify-start w-full gap-3'>
      <p className=' min-w-[34%] text-2xl text-white font-[Archivo_Black]'>Missing Skills:</p>
      <TagContainer>
        <Tag name='Tag1' />
        <Tag name='Tag2' />
        <Tag name='Tag3' />
      </TagContainer>
    </div>
  )
}

export default MissingSkills