import React, { useContext } from 'react'
import { DataContext } from '../../FormEntry/DataContext'

const Name = () => {
    const {Data, setData,liveData}=useContext(DataContext)
  return (
    <div className="text-black font-[Lora] font-bold text-[18px]">
        {liveData.firstname} {liveData.lastname}
    </div>
  )
}

export default Name