import React from 'react'

const Tag = (props) => {
  return (
    <div className='bg-white/20 hover:bg-white/40 min-w-10 min-h-2 border border-white px-4 py-1 rounded-full text-white font-[Braah_One]'>
        {props.name}
    </div>
  )
}

export default Tag