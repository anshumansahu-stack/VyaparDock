import React from 'react'

const ProjectContainer = (props) => {
    return (
        <div className={'min-h-5 text-[20px] text-black ' + (props.className || "")}>
            {props.children}
        </div>
    )
}

export default ProjectContainer