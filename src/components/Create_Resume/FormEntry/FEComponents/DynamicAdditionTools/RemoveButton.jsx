import React from 'react'

const RemoveButton = (props) => {
    return (
        <button onClick={() => props.remove(props.index)} className={"border border-red rounded-md text-red-400 font-bold text-xl hover:underline z-10 p-2 "+props.className}>
        Remove
        </button>
    )
}

export default RemoveButton