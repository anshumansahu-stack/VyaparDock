import React, { useContext } from 'react'
import { DataContext } from '../../../FormEntry/DataContext'
import address from '../../../../../assets/headericons/address.svg'
const Address = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if ((liveData.city != '') | (liveData.state != '') | (liveData.country != '') | (liveData.postalcode != '')){
        return (
            <div className={"text-black font-[Lora] font-bold text-[8px] min-h-1.25 min-w-35 flex items-center justify-start gap-1 " + props.className}>
                <img src={address} alt="Location icon" className="w-4 h-4 object-contain inline-block"/> {liveData.city}, {liveData.state}, {liveData.country} {liveData.postalcode}
            </div>
        )
    }
    else{
        return(
            <div className='border border-black min-h-[28.6px] min-w-35'>

            </div>
        )
    }
}

export default Address