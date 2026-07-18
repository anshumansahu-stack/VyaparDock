import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import address from '../../../../../../assets/headericons/address.svg'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'
import ImageContainer from '../../../PageAuxiliaries/ImageContainer'
const Address = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if ((liveData?.city && liveData.city.trim() !== '') | (liveData?.state && liveData.state.trim() !== '') | (liveData?.altphone && liveData.country.trim() !== '') | (liveData?.postalcode && liveData.postalcode.trim() !== '')) {
        return (
            <TextFieldContainer className={'font-[Lora] '+props.className || ""}>
                <ImageContainer src={address} alt='Location Icon'/>
                {liveData.city}
                {liveData.city && liveData.state? ', ' : ''} 
                {liveData.state}
                {liveData.state && liveData.country? ', ' : ''}
                {liveData.country}
                {" ("+liveData.postalcode+')'}
            </TextFieldContainer>
        )
    }
    else {
        return (
            null
        )
    }
}

export default Address