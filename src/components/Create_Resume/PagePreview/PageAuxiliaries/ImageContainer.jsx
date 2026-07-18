import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../DataContext'
const ImageContainer = (props) => {
    const {isPrinting}=useContext(DataContext)
  return (
    <img src={props.src} alt={props.alt} className={`w-[2.3cqw] h-[2.3cqw] object-contain inline-block + ${isPrinting? 'mt-4 ' : '' }`}  /> 
  )
}

export default ImageContainer