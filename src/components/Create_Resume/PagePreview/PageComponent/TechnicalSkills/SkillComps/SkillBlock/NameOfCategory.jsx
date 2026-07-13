import React from 'react'
import TextFieldContainer from '../../../../PageAuxiliaries/TextFieldContainer';

const NameOfCategory = (props) => {
  const categoryName = typeof props.tecSk?.category === 'string' ? props.tecSk.category.trim() : '';
  return (
    <TextFieldContainer className={'font-[Ibarra_Real_Nova] font-bold w-max whitespace-nowrap'}> 
    {/* // Whitespace-nowrap prevents the text from wrapping onto a newline */}
      {categoryName ? categoryName + ' :' : ""} 
    </TextFieldContainer>
    )
}

export default NameOfCategory