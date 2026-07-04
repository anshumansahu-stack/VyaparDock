import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import call from '../../../../../assets/headericons/call.svg'
const Phone = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData.phone != '') {
        return (
            <div className={"text-black font-[Lora] text-[25px] min-h-1.25 min-w-35 flex items-center justify-end gap-1" + props.className}>
                <img src={call} alt="Phone icon" className="w-6 h-6 object-contain inline-block"/> {liveData.phone}
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

export default Phone