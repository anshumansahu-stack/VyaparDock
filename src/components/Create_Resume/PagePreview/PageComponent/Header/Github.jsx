import React, { useContext } from 'react'
import { DataContext } from '../../../FormEntry/DataContext'
import github from '../../../../../assets/headericons/github.svg'
const Github = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData.github != '') {
        return (
            <div className={"text-black font-[Lora] font-bold text-[8px] min-h-1.25 min-w-35 flex items-center justify-start gap-1 " + props.className}>
                <img src={github} alt="github icon" className="w-3 h-3 object-contain inline-block " /> <a href={liveData?.github ? `https://${liveData.github}` : "#"}
                    target="_blank"
                    rel="noreferrer">GitHub</a>
            </div>
        )
    }
    else {
        return (
            <div className='border border-black min-h-[28.6px] min-w-35'>

            </div>
        )
    }
}

export default Github