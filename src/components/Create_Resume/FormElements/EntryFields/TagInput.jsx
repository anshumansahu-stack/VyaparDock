import React, { useState } from 'react'

const TagInput = (props) => {
  // Live watch the existing array values, fallback to an empty array
  const tags = props.methods.watch(props.item) || []
  const [inputValue, setInputValue] = useState('') //Initial state blank 

  const handleKeyDown = (e) => {
    // Intercept Comma, Enter is for submission and is applied to the window object
    if (e.key === ',') {
      e.preventDefault() // Stop character from printing inside input field
      
      const cleanValue = inputValue.trim().replace(/,$/, '') // Remove trailing comma if exists
      
      if (cleanValue) {
        // Check if the user is attempting to add more than 5 elements
        if (tags.length >= 5) {
          alert("Maximum of 5 top skills allowed per project to optimize resume layout density.")
          setInputValue('') // Wipe out the text field
          return // Exit execution immediately
        }

        // Push the new chip directly into the React Hook Form data state registry array if unique
        if (!tags.includes(cleanValue)) {
          props.methods.setValue(props.item, [...tags, cleanValue], { shouldValidate: true })
        }
        // Since the tags data are created here locally and managed and added here itself, useState hook as a blankarray is enough.
        // useContext is to talk through children elements, thats not required here.
      }
      
      setInputValue('') // Reset text field blank
    }
  }

  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove) // Keep only those tags those are not intended to be removed
    props.methods.setValue(props.item, updatedTags, { shouldValidate: true }) // shouldValidate: true means that the validation checks are to be mandatorily run on the newly updated fields, if any.
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Outer Border Display Container */}
      <div className={"w-full min-h-12.5 border border-solid border-white/40 p-2 rounded-md bg-transparent flex flex-wrap gap-2 items-center "+(props.childclassName || "")}>
        
        {/* Render Active Skill Chips List */}
        {tags.map((tag, tagIndex) => (
          <span 
            key={tagIndex} 
            className="flex items-center gap-1.5 bg-white/10 border border-solid border-white/20 text-white font-[Braah_One] text-md px-2.5 py-1 rounded-md transition-colors hover:bg-white/20"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-red-400 font-bold hover:text-red-300 text-xl focus:outline-none cursor-pointer"
            >
              ×
            </button>
          </span>
        ))}

        {/* Dynamic Inline Input Field Box — Hides or shows depending on cap limit */}
        {tags.length < 5 ? (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? props.placeholder : "Add more..."}
            className="flex-1 bg-transparent text-white p-1 outline-none border-none placeholder:text-gray-400 min-w-30"
          />
        ) : (
          <span className="text-gray-400 italic px-2">
            (5 skill limit reached)
          </span>
        )}
      </div>
    </div>
  )
}

export default TagInput
