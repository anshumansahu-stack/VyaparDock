import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import mail from '../../../../../../assets/headericons/mail.svg'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'
const Email = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.email && liveData.email.trim() !== '') { // basically if a field is not undefined and if it is, it is not empty. Applicable on all other such fields, Prevents stray marks on the live paper.
        return (
            <TextFieldContainer className={props.className || ""}>
                <img src={mail} alt="Email icon" className="w-6 h-6 object-contain inline-block"/> {liveData.email}
            </TextFieldContainer>
        )
    }
    else{
        return(
            <TextFieldContainer/>
        )
    }
}

export default Email