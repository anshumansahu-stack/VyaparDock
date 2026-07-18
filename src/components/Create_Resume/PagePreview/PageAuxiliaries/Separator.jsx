import React from 'react'
import { DataContext } from '../../DataContext'
import { useContext } from 'react'
const Separator = () => {
  const {isPrinting}=useContext(DataContext)
  return (
    <div className={`w-full border-b-2 border-black ${isPrinting?'mt-3':''}`}>

    </div>
  )
}

export default Separator