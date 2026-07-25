import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import linkedin from '../../../../../../assets/headericons/linkedin.svg'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'
import DummyContainer from '../HeaderContainers/DummyContainer'
import ImageContainer from '../../../PageAuxiliaries/ImageContainer'
const Linkedin = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.linkedin && liveData.linkedin.trim() !== '') {
        return (
            <TextFieldContainer className={'font-[Lora] h-[3cqw]! '+props.className || ""}>
                <ImageContainer src={linkedin} alt="linkedin icon"/><a href={liveData?.linkedin ? liveData.linkedin : "#"}
                    target="_blank"
                    rel="noreferrer">LinkedIn</a>
            </TextFieldContainer>
        )
    }
    else {
        return (
            null
        )
    }
}

export default Linkedin