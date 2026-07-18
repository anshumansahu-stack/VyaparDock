import React from 'react'

const TextFieldContainer = (props) => {
    return (
        <div className={'min-h-0 text-[2cqw] text-black flex gap-[0.5cqw] items-center justify-center print:text-[11px] print:gap-0.5 ' + (props.className || "")}>
            {props.children}
        </div>
    )
}

export default TextFieldContainer