import React, { useContext } from 'react'
import { DataContext } from '../../../FormEntry/DataContext'
import call from '../../../../../assets/headericons/call.svg'
const AltPhone = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData.altphone != '') {
        return (
            <div className={"text-black font-[Lora] font-bold text-[8px] min-h-1.25 min-w-35 flex items-center justify-start gap-1 " + props.className}>
                <img src={call} alt="Phone icon" className="w-4 h-4 object-contain inline-block"/> {liveData.altphone}
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

export default AltPhone