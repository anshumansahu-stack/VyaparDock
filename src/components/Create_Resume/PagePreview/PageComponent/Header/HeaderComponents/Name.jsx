import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'

const Name = (props) => {
    const {Data, setData,liveData}=useContext(DataContext)
  return (
    <div className={"text-black font-[Lora] font-bold text-[25px] min-h-1.25 min-w-35 flex items-center justify-start " + props.className}>
        {liveData.firstname} {liveData.lastname}
    </div>
  )
}

export default Name