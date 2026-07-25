import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import call from '../../../../../../assets/headericons/call.svg'
import DummyContainer from '../HeaderContainers/DummyContainer'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'
import ImageContainer from '../../../PageAuxiliaries/ImageContainer'
const Phone = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.phone && liveData.phone.trim() !== '') {
        return (
            <TextFieldContainer className={'font-[Lora] h-[3cqw]! '+props.className || ""}>
                <ImageContainer src={call} alt="Phone icon"/> {liveData.phone}
            </TextFieldContainer>
        )
    }
    else{
        return(
            <DummyContainer/>
        )
    }
}

export default Phone