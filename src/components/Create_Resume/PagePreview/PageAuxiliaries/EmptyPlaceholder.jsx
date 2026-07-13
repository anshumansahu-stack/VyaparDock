import React from 'react'

const EmptyPlaceholder = (props) => {
  return (
    <span className="font-serif text-sm italic text-gray-400">{props.placeholder}</span>
  )
}

export default EmptyPlaceholder