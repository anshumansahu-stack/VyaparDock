import React from 'react'

const ClearCurrentButton = (props) => {
  return (
    <button onClick={props.onClick} className='font-[Braah_One] border border-orange-500 text-orange-500 px-3 py-0.5 w-35 rounded-md absolute left-5 '>
      Clear This Page
    </button>
  )
}

export default ClearCurrentButton