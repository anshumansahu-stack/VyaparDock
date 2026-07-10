import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import call from '../../../../../../assets/headericons/call.svg'
import FieldContainer from '../HeaderContainers/FieldContainer'
import DummyContainer from '../HeaderContainers/DummyContainer'
const AltPhone = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.altphone && liveData.altphone.trim() !== '') {
        return (
            <FieldContainer className={props.className || ""}>
                <img src={call} alt="Phone icon" className="w-6 h-6 object-contain inline-block"/> {liveData.altphone}
            </FieldContainer>
        )
    }
    else{
        return(
            null
        )
    }
}

export default AltPhone