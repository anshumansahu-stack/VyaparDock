import React from 'react'
const TextAreaEntry = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Stop standard newline
      const { selectionStart, value } = e.target;

      // Insert a newline followed by a bullet point
      const before = value.substring(0, selectionStart);
      const after = value.substring(selectionStart);
      const newValue = before + "\n– " + after; //before value, enter then after value.

      e.target.value = newValue;
      // Put cursor right after the new "-"
      e.target.selectionStart = e.target.selectionEnd = selectionStart + 3;
    }
  };

  const handleFocus = (e) => {
    // If the box is empty, start it with a bullet point immediately
    if (e.target.value === "") {
      e.target.value = "– ";
    }
  };
  return (
    <div className={'w-full flex flex-col ' + (props.className || "")}>
      <textarea
        className="border-solid border-white border h-full w-full rounded-md placeholder:text-gray-400 p-2 text-white "
        {...props.register(props.item, props.validation || {})}
        placeholder={props.placeholder} 
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        />
    </div>
  )
}

export default TextAreaEntry