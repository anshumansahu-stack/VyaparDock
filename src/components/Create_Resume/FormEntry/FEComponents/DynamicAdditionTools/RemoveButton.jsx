import React from 'react'

const RemoveButton = (props) => {
    return (
        <button 
        onClick={(e) => {
            e.preventDefault()
            console.log('handleRemove is:',props.handleRemove)
            props.handleRemove(props.index)
            props.remove(props.index)
        }} 
        className={"border min-w-0 border-red-400 rounded-md text-red-400 font-bold text-xl hover:underline p-5 flex items-center justify-center flex-wrap "+(props.className || "")}>
            {/*      flex items-center justify-center */}
        Remove
        </button>
    )
}

export default RemoveButton