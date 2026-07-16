import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import call from '../../../../../../assets/headericons/call.svg'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'
const AltPhone = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.altphone && liveData.altphone.trim() !== '') {
        return (
            <TextFieldContainer className={props.className || ""}>
                <img src={call} alt="Phone icon" className="w-6 h-6 object-contain inline-block"/> {liveData.altphone}
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