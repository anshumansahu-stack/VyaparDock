import React from 'react'
import Position from './PoRBlock/Position'
import Organisation from './PoRBlock/Organisation'
import PosDesc from './PoRBlock/PosDesc'
import DateBlock from './PoRBlock/DateBlock'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'

// Did not divide any further subcomponents here because each component rendered in the same level has unique configurations.
const PoRBlock = (props) => {
  return (
    <div className='flex flex-col w-full '>
      <div className='flex justify-between pt-2'>
        <div className='flex flex-col items-start justify-center'>
          <Position por={props.por} />
          <Organisation por={props.por} />
        </div>
        <div className='flex flex-col items-end justify-center'>
          <DateBlock por={props.por} />
          <TextFieldContainer/>
        </div>
      </div>
      <PosDesc por={props.por} className='self-start' />
    </div>
  )
}

export default PoRBlock