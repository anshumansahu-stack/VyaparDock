import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import linkedin from '../../../../../assets/headericons/linkedin.svg'
const Linkedin = (props) => {
    const { Data, setData, liveData } = useContext(DataContext)
    if (liveData.linkedin != '') {
        return (
            <div className={"text-black font-[Lora] text-[25px] min-h-1.25 min-w-35 flex items-center justify-end gap-2 " + props.className}>
                <img src={linkedin} alt="linkedin icon" className="w-5 h-5 object-contain inline-block" /><a href={liveData?.linkedin ? `https://${liveData.linkedin}` : "#"}
                    target="_blank"
                    rel="noreferrer">LinkedIn</a>
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

export default Linkedin