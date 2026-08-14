import React from 'react'

const ButtonLayout = (props) => {
  return (
    <button onClick={props.onClick} className={'font-[Braah_One] border border-black px-3 py-0.5 rounded-md hover:scale-105 transition-all ' + (props.className || '')}>
      {props.children}
    </button>
  )
}

export default ButtonLayout