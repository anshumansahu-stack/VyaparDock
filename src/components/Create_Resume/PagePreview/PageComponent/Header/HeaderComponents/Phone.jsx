import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import call from '../../../../../../assets/headericons/call.svg'
import DummyContainer from '../HeaderContainers/DummyContainer'
import FieldContainer from '../HeaderContainers/FieldContainer'
const Phone = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.phone && liveData.phone.trim() !== '') {
        return (
            <FieldContainer className={props.className || ""}>
                <img src={call} alt="Phone icon" className="w-6 h-6 object-contain inline-block"/> {liveData.phone}
            </FieldContainer>
        )
    }
    else{
        return(
            <DummyContainer/>
        )
    }
}

export default Phone