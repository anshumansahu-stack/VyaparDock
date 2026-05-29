import React from 'react'

const CTA = (props) => {
  return (
    <div>
      <button className='bg-white text-xl font-[Croissant_One] text-indigo-950 text-[35px] font-bold hover:text-purple-300 border py-2 px-2 rounded-[20px]'>{props.name}</button>
    </div>
  )
}

export default CTA
