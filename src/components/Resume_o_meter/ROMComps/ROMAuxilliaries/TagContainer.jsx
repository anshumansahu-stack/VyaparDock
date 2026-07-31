import React from 'react'

const TagContainer = (props) => {
    return (
        <div className=' w-full flex justify-start items-center gap-3 flex-wrap h-full'>
            {props.children}
        </div>
    )
}

export default TagContainer