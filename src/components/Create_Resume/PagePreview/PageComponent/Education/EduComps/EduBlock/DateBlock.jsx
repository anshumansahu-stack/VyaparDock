import React, { useContext } from 'react'
import { DataContext } from '../../../../../DataContext'
import EduDummyContainer from '../EduContainers/EduDummyContainer'

const formatResumeDate = (dateString) => { // Converts YYYY-MM-DD to month-YYYY
    if (!dateString) return '';
    if (dateString === 'Present') return 'Present';

    // Safety check: if the user typed something else or it's already converted, pass it through
    if (!dateString.includes('-')) return dateString;

    try {
        const [year, month, day] = dateString.split('-');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthIndex = parseInt(month, 10) - 1;

        if (monthIndex >= 0 && monthIndex < 12) {
            return `${months[monthIndex]} ${year}`; // Outputs clean "Jan 2025" strings on the canvas
        }
        return dateString;
    } catch (e) {
        return dateString; // Clean fallback if a parsing error pops up
    }
}
const DateBlock = () => {
    const { liveData } = useContext(DataContext)
    const educationList = liveData?.education || [] // If theres any livedata then extract the education list
    return (
        <>
            {/* Map over the collection so every added block prints its organization name */}
            {educationList.map((edu, index) => {
                const startDate = edu?.startDate;
                const endDate = edu?.endDate;
                // Guard Check: Skip rendering if this specific row is empty
                if ((!startDate) && (!endDate)) {
                    return (
                        <EduDummyContainer key={index}/> // Passing key as a prop to omit react DOM warning codes
                    );
                }
                else if ((startDate) && (!endDate)) {
                    return (
                        <div key={index} className='font-[Ibarra_Real_Nova] text-[20px] italic text-black'>
                            {formatResumeDate(startDate)} //formatted Date
                        </div>
                    )
                }
                else if ((!startDate) && (endDate)) {
                    return (
                        <div key={index} className='font-[Ibarra_Real_Nova] text-[20px] italic text-black'>
                            {formatResumeDate(endDate)} 
                        </div>
                    )
                }

                return (
                    <div key={index} className='font-[Ibarra_Real_Nova] text-[20px] italic text-black'>
                        {formatResumeDate(startDate)} - {formatResumeDate(endDate)}
                    </div>
                )
            })}
        </>
    )
}

export default DateBlock