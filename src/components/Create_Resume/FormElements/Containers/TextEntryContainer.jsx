import React from 'react'

const TextEntryContainer = (props) => {
  //Container for arranging text entries where text description entries are to be arranged.
  return (
    <div className={'flex place-content-around w-full gap-6 ' + (props.className || '')}>
        {props.children}
    </div>
  )
}

export default TextEntryContainer