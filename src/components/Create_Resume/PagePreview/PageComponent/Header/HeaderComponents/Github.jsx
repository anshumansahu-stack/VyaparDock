import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import github from '../../../../../../assets/headericons/github.svg'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'
const Github = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.github && liveData.github.trim() !== '') {
        return (
            <TextFieldContainer className={props.className || ""}>
                <img src={github} alt="github icon" className="w-6 h-6 object-contain inline-block " /> <a href={liveData?.github ? liveData.github : "#"}
                    target="_blank"
                    rel="noreferrer">GitHub</a>
            </TextFieldContainer>
        )
    }
    else {
        return (
            null
        )
    }
}

export default Github