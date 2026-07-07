import React from 'react'

const SubmitButton = (props) => {
  return (
    <div onClick={props.onClick} className='cursor-pointer font-[Braah_One] border border-black px-3 py-0.5 rounded-md'>
        Submit
    </div>
  )
}

export default SubmitButton