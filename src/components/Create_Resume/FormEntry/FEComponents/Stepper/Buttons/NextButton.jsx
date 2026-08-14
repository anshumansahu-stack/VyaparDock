import React from 'react'
import ButtonLayout from './ButtonLayout'
const NextButton = (props) => {
  return (
    <ButtonLayout onClick={props.onClick} className='font-[Braah_One] border border-black px-3 py-0.5 rounded-md'>
      Next →
    </ButtonLayout>
  )
}

export default NextButton