import React from 'react'

const IsCurrentCheckerButton = (props) => {
  return (
    <div className={'text-white font-[Braah_One] flex justify-between items-center w-60 min-h-5 '+props.className}>
        <label htmlFor={props.item} className='cursor-pointer'>{props.value || 'I am Currently in this Role'}</label>
        <input id={props.item} type="checkbox" className='cursor-pointer w-4 h-4' {...props.register(props.item)}></input>
    </div> 
    // item is the name of the dictionary key of the data basically.
  )
}

export default IsCurrentCheckerButton