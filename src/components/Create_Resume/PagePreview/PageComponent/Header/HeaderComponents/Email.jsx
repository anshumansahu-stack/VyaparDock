import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import mail from '../../../../../../assets/headericons/mail.svg'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'
import ImageContainer from '../../../PageAuxiliaries/ImageContainer'
const Email = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.email && liveData.email.trim() !== '') { // basically if a field is not undefined and if it is, it is not empty. Applicable on all other such fields, Prevents stray marks on the live paper.
        return (
            <TextFieldContainer className={'font-[Lora] '+props.className || ""}>
                <ImageContainer src={mail} alt="Email icon"/>{liveData.email}
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