import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import FormError from '../FormAuxiliaries/FormError'

const TagInputNoLimit = (props) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <Controller
      name={props.item}
      control={props.methods.control}
      rules={props.validation || {}}
      render={({ field, fieldState }) => {

        const tags = field.value || [];

        const fieldError = fieldState.error;
        const isTouched = fieldState.isTouched;
        const hasGlobalErrors = props.methods.formState?.errors && Object.keys(props.methods.formState.errors).length > 0;

        const shouldShowError = !!fieldError && (isTouched || props.methods.formState?.isSubmitting || hasGlobalErrors);


        const isValidTag = (tag) => {
          return tag.length <= 25 && /^[\p{L}0-9\s+#./-]+$/u.test(tag)
        }

        const handleKeyDown = (e) => {
          if (e.key === ',') {
            e.preventDefault()
            const cleanValue = inputValue.trim().replace(/,$/, '')

            if (cleanValue) { //Empty tags are auto filtered

              if (!isValidTag(cleanValue)) {
                alert("Invalid entry — max 25 characters, letters/numbers/basic symbols only.")
                setInputValue('')
                return
              }

              if (!tags.includes(cleanValue)) {
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

        const handlePaste = (e) => {
          e.preventDefault()
          const pastedText = e.clipboardData.getData('text')
          const pastedTags = pastedText.split(',').map(t => t.trim()).filter(Boolean)
          let invalidalert = false

          let currentTags = [...tags]
          for (const tag of pastedTags) {
            if (!isValidTag(tag)) {
              if (!invalidalert) {
                alert("Some invalid entries were not pasted due to the character cap.")
                invalidalert = true
              }
              continue
            }
            if (!currentTags.includes(tag)) {
              currentTags.push(tag)
            }
          }
          field.onChange(currentTags)
          setInputValue('')
        }

        return (
          <div className={`w-full min-h-12.5 border border-solid p-2 rounded-md flex flex-nowrap overflow-x-auto no-scrollbar gap-2 items-center transition-colors duration-200 ${props.className || ""} ${!shouldShowError ? 'border-white bg-white/10' : 'border-red-600 bg-red-400/10'
            }`}>

            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="flex items-center gap-1.5 bg-transparent border border-solid border-white/20 text-white shrink-0 font-[Braah_One] text-md px-2.5 py-1 rounded-md transition-colors hover:bg-white/10"
                title={tag}
              >
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

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              placeholder={tags.length === 0 ? props.placeholder : "Add more..."}
              className="flex-1 bg-transparent text-white p-1 outline-none border-none placeholder:text-gray-400 min-w-30 shrink-0"
            />
            {shouldShowError && <FormError name={props.item} errors={props.methods.formState.errors} />}
          </div>
        );
      }}
    />
  )
}

export default TagInputNoLimit