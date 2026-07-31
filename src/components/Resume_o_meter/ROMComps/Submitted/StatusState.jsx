import React from 'react'
import { useContext } from 'react'
import { ROMContext } from '../../ROMContext'
const StatusState = () => {
    const { processing, setProcessing } = useContext(ROMContext)
    return (
        <div className='flex items-center justify-center w-full h-full max-h-1/7 bg-black/50 rounded-t-2xl'>
            <span className=' font-[Freeman] text-[4vw] text-white'>
                {processing ? 'Analysing...' : 'Done!'}
            </span>
        </div>
    )
}

export default StatusState