import React from 'react'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'

const AchBlock = (props) => {
  const achName = typeof props.achLi?.achtitle === 'string' ? props.achLi.achtitle.trim() : '';
  const achDesc = typeof props.achLi?.achdesc === 'string' ? props.achLi.achdesc.trim() : '';
  return (
    <TextFieldContainer className='justify-start w-full pt-2 font-[Ibarra_Real_Nova] text-left block!'>
      {(achName || (achName && achDesc)) && (
        <span className="font-bold inline">
          {achName ? achName : ""}{achName && achDesc ? " : " : ""}
        </span>
      )}
      {achDesc ? ` ${achDesc}` : ""} 
      {/* Inline with the above line */}
    </TextFieldContainer>
  )
}

export default AchBlock