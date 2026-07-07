import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import github from '../../../../../assets/headericons/github.svg'
const Github = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData?.github && liveData.github.trim() !== '') {
        return (
            <div className={"text-black font-[Lora] text-[25px] min-h-1.25 min-w-35 flex items-center justify-end gap-1 " + props.className}>
                <img src={github} alt="github icon" className="w-6 h-6 object-contain inline-block " /> <a href={liveData?.github ? `https://${liveData.github}` : "#"}
                    target="_blank"
                    rel="noreferrer">GitHub</a>
            </div>
        )
    }
    else {
        return (
            <div className='min-h-[28.6px] min-w-35'>

            </div>
        )
    }
}

export default Github