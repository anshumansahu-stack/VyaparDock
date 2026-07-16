import React from 'react'
import ButtonLayout from './ButtonLayout'

const PrintPDF = (props) => {
    return (
        <ButtonLayout onClick={props.onClick}>
            Save PDF ↓
        </ButtonLayout>
    )
}

export default PrintPDF