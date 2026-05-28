import React from 'react'

const CTA = (props) => {
  return (
    <div className='bg-amber-800 text-xl font-bold text-yellow-300'>
      <button>{props.name}</button>
    </div>
  )
}

export default CTA
