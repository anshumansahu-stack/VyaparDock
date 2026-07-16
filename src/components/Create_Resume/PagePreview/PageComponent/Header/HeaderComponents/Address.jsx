import React, { useContext } from 'react'
import { DataContext } from '../../../../DataContext'
import address from '../../../../../../assets/headericons/address.svg'
import TextFieldContainer from '../../../PageAuxiliaries/TextFieldContainer'
const Address = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if ((liveData?.city && liveData.city.trim() !== '') | (liveData?.state && liveData.state.trim() !== '') | (liveData?.altphone && liveData.country.trim() !== '') | (liveData?.postalcode && liveData.postalcode.trim() !== '')) {
        return (
            <TextFieldContainer className={props.className || ""}>
                <img src={address} alt="Location icon" className="w-6 h-6 object-contain inline-block" /> {liveData.city}, {liveData.state}, {liveData.country} {liveData.postalcode}
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