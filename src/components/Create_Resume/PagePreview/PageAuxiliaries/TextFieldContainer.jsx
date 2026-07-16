import React from 'react'

const TextFieldContainer = (props) => {
    return (
        <div className={'min-h-5 text-[16px] text-black ' + (props.className || "")}>
            {props.children}
        </div>
    )
}

export default TextFieldContainer