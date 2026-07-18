import React, { useContext } from 'react'
import { useFieldArray } from 'react-hook-form'
import FormLabel from '../../../FormElements/FormAuxiliaries/FormLabel'
import TextEntry from '../../../FormElements/EntryFields/TextEntry'
import TagInputNoLimit from '../../../FormElements/EntryFields/TagInputNoLimit'
import MainForm from '../../../FormElements/Containers/MainForm'
import FormTitle from '../../../FormElements/FormAuxiliaries/FormTitle'
import { DataContext } from '../../../DataContext'
import ObjectContainer from '../../../FormElements/Containers/ObjectContainer'
import AddNewButton from '../DynamicAdditionTools/AddNewButton'
import RemoveButton from '../DynamicAdditionTools/RemoveButton'

const TechnicalSkills = () => {
  const { methods, onSubmit, } = useContext(DataContext)

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "technicalskills"
  })

  return (
    <MainForm onSubmit={methods.handleSubmit(onSubmit)}>

      <FormTitle title="Technical Skills"></FormTitle>

      {fields.map((field, index) => {
        return ( // Main form logic
          <ObjectContainer key={field.id} className='flex-row! w-full! place-content-aaround!'>
            <TextEntry
              item={`technicalskills.${index}.category`}
              childclassName='min-h-full!'
              placeholder='Enter Tech Stack Category:'
              register={methods.register}
              formState={methods.formState} 
              validation={{ required: "Category is required!" }}
              className='min-w-1/4!'
            ></TextEntry>
            <TagInputNoLimit
              item={`technicalskills.${index}.skillList`}
              methods={methods}
              className='min-w-[55%]!'
              validation={{ required: "Must contain atleast 1 item!" }}
              placeholder='Type a skill (e.g. React) and press comma...'
            />
            <RemoveButton remove={remove} index={index} className='min-h-full! text-[17px]' />
          </ObjectContainer>
        );
      })}

      <AddNewButton 
      title='Add New Tech Stack →' 
      onClick={
        (e) => {
          e.preventDefault()
          append({ category: '', skillList: '' })
        }
        }></AddNewButton>

    </MainForm>
  )
}

export default TechnicalSkills