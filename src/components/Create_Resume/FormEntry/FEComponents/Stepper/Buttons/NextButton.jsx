import React from 'react'

const NextButton = (props) => {
  return (
    <button onClick={props.onClick} className='font-[Braah_One] border border-black px-3 py-0.5 rounded-md'>
      Next →
    </button>
  )
}

export default NextButton