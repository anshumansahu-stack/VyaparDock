import React, { useContext } from 'react'
import { useFieldArray } from 'react-hook-form'
import FormLabel from '../../../FormElements/FormAuxiliaries/FormLabel'
import TextEntry from '../../../FormElements/EntryFields/TextEntry'
import MainForm from '../../../FormElements/Containers/MainForm'
import FormTitle from '../../../FormElements/FormAuxiliaries/FormTitle'
import { DataContext } from '../../../DataContext'
import ObjectContainer from '../../../FormElements/Containers/ObjectContainer'
import AddNewButton from '../DynamicAdditionTools/AddNewButton'
import RemoveButton from '../DynamicAdditionTools/RemoveButton'

// Why did i use useWatch and useFieldArray right here, whilst the rest of the form logic is imported from datacontext from create_resume?
// 
const AreasOfExpertise = () => {
  const { methods, onSubmit, } = useContext(DataContext)

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "areasofexpertise"
  })

  return (
    <MainForm onSubmit={methods.handleSubmit(onSubmit)} className='w-250!'>
      {/* //FormProvider is imported here itself */}
      <FormTitle title="Areas of Expertise"></FormTitle>

      {fields.map((field, index) => {

        return ( // Main form logic
          <ObjectContainer key={field.id} className='flex-row! justify-center items-center gap-4! min-w-7/10! mb-4 '>
            <TextEntry item={`areasofexpertise.${index}.title`} placeholder='Enter Your Skill:' register={methods.register}></TextEntry>
            <TextEntry item={`areasofexpertise.${index}.skill`} placeholder='Skill level on a scale of 1 to 5' register={methods.register} className='w-60!'></TextEntry>
            <RemoveButton remove={remove} index={index} className='max-h-8 px-3 text-sm'/>
          </ObjectContainer>
        ); // Clean return closure
      })} {/* Clean loop closure (No loose parenthesis or dangling braces) */}

      <AddNewButton title='Add New Expertise →' onClick={() => append({ title: '', skill: '' })}></AddNewButton>
      {/* The above onclick will add to the experience section in particular. For any other form the fields will be different. So it needs to be as an attribute passed as props and not at the object level. */}
    </MainForm>
  )
}

export default AreasOfExpertise