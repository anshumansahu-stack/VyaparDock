import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import github from '../../../../../../assets/headericons/github.svg'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'
import ImageContainer from '../../../PageAuxiliaries/ImageContainer'
const Github = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.github && liveData.github.trim() !== '') {
        return (
            <TextFieldContainer className={'font-[Lora] h-[3cqw]! '+props.className || ""}>
                <ImageContainer src={github} alt="github icon"/> <a href={liveData?.github ? liveData.github : "#"}
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