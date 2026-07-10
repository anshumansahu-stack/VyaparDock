import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import linkedin from '../../../../../../assets/headericons/linkedin.svg'
import FieldContainer from '../HeaderContainers/FieldContainer'
import DummyContainer from '../HeaderContainers/DummyContainer'
const Linkedin = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.linkedin && liveData.linkedin.trim() !== '') {
        return (
            <FieldContainer className={props.className || ""}>
                <img src={linkedin} alt="linkedin icon" className="w-5 h-5 object-contain inline-block" /><a href={liveData?.linkedin ? liveData.linkedin : "#"}
                    target="_blank"
                    rel="noreferrer">LinkedIn</a>
            </FieldContainer>
        )
    }
    else {
        return (
            null
        )
    }
}

export default Linkedin