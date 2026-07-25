import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import call from '../../../../../../assets/headericons/call.svg'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'
import ImageContainer from '../../../PageAuxiliaries/ImageContainer'
const AltPhone = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.altphone && liveData.altphone.trim() !== '') {
        return (
            <TextFieldContainer className={'font-[Lora] h-[3cqw]! '+props.className || ""}>
                <ImageContainer src={call} alt="Phone icon"/> {liveData.altphone}
            </TextFieldContainer>
        )
    }
    else{
        return(
            null
        )
    }
}

export default AltPhone