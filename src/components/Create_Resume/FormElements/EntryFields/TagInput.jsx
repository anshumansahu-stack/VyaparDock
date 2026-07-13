import React, { useState } from 'react'
import { Controller } from 'react-hook-form' 
import FormError from '../FormAuxiliaries/FormError'

const TagInput = (props) => {
  const [inputValue, setInputValue] = useState('') 

  return (
    <Controller
      name={props.item}
      control={props.methods.control}
      rules={props.validation || {}}
      render={({ field, fieldState }) => {
        
        // Extract exact live data parameters out of the Controller proxy stream natively
        const tags = field.value || []; 
        
        // Notebook Error Parsing Matrix — Streamlined and handled by the Controller out-of-the-box
        const fieldError = fieldState.error;
        const isTouched = fieldState.isTouched;
        const hasGlobalErrors = props.methods.formState?.errors && Object.keys(props.methods.formState.errors).length > 0;
        
        // Your exact preferred truth table evaluation condition string
        const shouldShowError = !!fieldError && (isTouched || props.methods.formState?.isSubmitting || hasGlobalErrors);

        const handleKeyDown = (e) => {
          if (e.key === ',') {
            e.preventDefault() 
            const cleanValue = inputValue.trim().replace(/,$/, '') 

            if (cleanValue) {
              if (tags.length >= 5) {
                alert("Maximum of 5 top skills allowed per project to optimize resume layout density.")
                setInputValue('') 
                return 
              }

              if (!tags.includes(cleanValue)) {
                // Updates your parent context and localStorage backup synchronously
                field.onChange([...tags, cleanValue]);
              }
            }
            setInputValue('') 
          }
          else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
            removeTag(tags[tags.length - 1])
          }
        }

        const removeTag = (tagToRemove) => {
          const updatedTags = tags.filter(tag => tag !== tagToRemove);
          field.onChange(updatedTags); 
        }

        return (
            <div className={`w-full min-h-12.5 border border-solid p-2 rounded-md flex flex-nowrap overflow-x-auto no-scrollbar gap-2 items-center transition-colors duration-200 ${props.className || ""} ${
              !shouldShowError ? 'border-white bg-white/10' : 'border-red-600 bg-red-400/10'
            }`}>

              {/* Active Skill Chips  */}
              {tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="flex items-center gap-1.5 bg-transparent border border-solid border-white/20 text-white shrink-0 font-[Braah_One] text-md px-2.5 py-1 rounded-md transition-colors hover:bg-white/10"
                  title={tag}
                >
                  {/* Your clean text ellipsis truncation tag wrapper element */}
                  <span className="max-w-[7ch] truncate block">
                    {tag}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-red-400 font-bold hover:text-red-300 text-xl focus:outline-none cursor-pointer shrink-0 ml-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}

              {/* Inline Input Box Container */}
              {tags.length < 5 ? (
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={tags.length === 0 ? props.placeholder : "Add more..."}
                  className="flex-1 bg-transparent text-white p-1 outline-none border-none placeholder:text-gray-400 min-w-30 shrink-0"
                />
              ) : (
                <span className="text-gray-400 italic px-2 font-sans text-xs shrink-0">
                  (5 skill limit reached)
                </span>
              )}
            {shouldShowError && <FormError name={props.item} errors={props.methods.formState.errors} />}
            </div>
        );
      }}
    />
  )
}

export default TagInput
