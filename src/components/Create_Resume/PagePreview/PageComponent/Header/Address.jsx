import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import address from '../../../../../assets/headericons/address.svg'
const Address = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if ((liveData?.city && liveData.city.trim() !== '') | (liveData?.state && liveData.state.trim() !== '') | (liveData?.altphone && liveData.country.trim() !== '') | (liveData?.postalcode && liveData.postalcode.trim() !== '')){
        return (
            <div className={"text-black font-[Lora] text-[25px] min-h-1.25 min-w-35 flex items-center justify-end gap-1 " + props.className}>
                <img src={address} alt="Location icon" className="w-6 h-6 object-contain inline-block"/> {liveData.city}, {liveData.state}, {liveData.country} {liveData.postalcode}
            </div>
        )
    }
    else{
        return(
            <div className='min-h-[28.6px] min-w-35'>

            </div>
        )
    }
}

export default Address