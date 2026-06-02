import React from 'react'

const Footerbutton = (props) => {
  return (
    <div>
      <button className={'font-[Roboto_Condensed] text-[22px] text-indigo-100 hover:text-slate-500 ' + props.className} onClick={()=>window.open(props.link,'_blank')}>{props.name}</button>
    </div>
  )
}

export default Footerbutton
