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

  const handleRemove = (index) => {
        methods.setValue(`technicalskills.${index}.category`, '');
        methods.setValue(`technicalskills.${index}.skillList`, []);
    };

  return (
    <MainForm onSubmit={methods.handleSubmit(onSubmit)}>

      <FormTitle title="Technical Skills"></FormTitle>

      {fields.map((field, index) => {
        return ( // Main form logic
          <ObjectContainer key={field.id} className='flex-row! w-full! place-content-around!'>
            <TextEntry
              item={`technicalskills.${index}.category`}
              childclassName='min-h-full!'
              placeholder='Enter Tech Stack Category:'
              register={methods.register}
              control={methods.control}
              formState={methods.formState}
              validation={{ required: "Category is required!" }}
              className='min-w-1/4!'
            ></TextEntry>
            <TagInputNoLimit
              item={`technicalskills.${index}.skillList`}
              methods={methods}
              className='min-w-[55%]!'
              validation={{
                validate: (value) => (Array.isArray(value) && value.length > 0) || "Must contain at least 1 item!"
              }} // value is the actual data that is in my array, while Array is a global Object. The Array.length>1 is hence always true. value.length>0 refers to the total number of entries that are entered in the field.
              placeholder='Type a skill (e.g. React) and press comma...'
            />
            <RemoveButton handleRemove={handleRemove} remove={remove} index={index} className='min-h-full! text-[17px]' />
          </ObjectContainer>
        );
      })}

      <AddNewButton
        title='Add New Tech Stack →'
        onClick={
          (e) => {
            e.preventDefault()
            append({ category: undefined, skillList: [] })
          }
        }></AddNewButton>

    </MainForm>
  )
}

export default TechnicalSkills