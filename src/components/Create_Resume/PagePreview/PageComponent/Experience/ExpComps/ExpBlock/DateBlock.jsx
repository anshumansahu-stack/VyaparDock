import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

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
const DateBlock = (props) => {
    const start = props.exp?.startDate
    const end = props.exp?.endDate
    return (
        <TextFieldContainer className='italic font-[Ibarra_Real_Nova]'>
            {start ? formatResumeDate(start) : ""}
            {start && end ? " - " : ""}
            {end ? formatResumeDate(end) : ""}
        </TextFieldContainer>
    )// Render any of the blocks when they are available. Dont leave the '-' hanging midway.
}
export default DateBlock