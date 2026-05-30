import React from 'react'

const Navbutton = (props) => {
  return (
    <div >
      <button className={'font-[Braah_One] text-[18px] text-indigo-100 hover:text-fuchsia-600 ' + props.className}>{props.name}</button>
    </div>
  )
}

export default Navbutton
