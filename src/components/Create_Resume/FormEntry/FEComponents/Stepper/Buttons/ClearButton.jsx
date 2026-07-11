import React from 'react'

const ClearButton = (props) => {
  return (
    <button onClick={props.onClick} className='font-[Braah_One] border border-red-500 text-red-500 px-3 py-0.5 w-28 rounded-md absolute right-5 '>
      Clear Form
    </button>
  )
}

export default ClearButton