import React from 'react'

const RemoveButton = (props) => {
    return (
        <button 
        onClick={() => props.remove(props.index)} 
        className={"border border-red-400 rounded-md text-red-400 font-bold text-xl hover:underline z-10 p-2 flex items-center justify-center "+(props.className || "")}>
            {/*      flex items-center justify-center */}
        Remove
        </button>
    )
}

export default RemoveButton