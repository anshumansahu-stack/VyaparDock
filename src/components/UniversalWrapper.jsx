import React from 'react'

const UniversalWrapper = (props) => {
    return (
        <div style={{ background: 'linear-gradient(to left, #2c5364, #203a43, #0f2027)' }} className='h-screen flex flex-col items-center'>
            {props.children}
        </div>
    )
}

export default UniversalWrapper