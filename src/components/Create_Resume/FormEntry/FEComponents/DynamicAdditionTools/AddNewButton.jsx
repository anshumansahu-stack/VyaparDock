import React from 'react'

const AddNewButton = (props) => {
  return (
    <button onClick={props.onClick} className={'cursor-pointer border py-3 px-6 hover:text-slate-400 font-[Braah_One] text-[20px] text-white rounded-xl '+ props.className}>
        {props.title}
    </button>
  )
}

export default AddNewButton