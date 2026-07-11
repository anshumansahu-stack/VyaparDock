import React, { useContext } from 'react'
import { useFieldArray } from 'react-hook-form'
import FormLabel from '../../../FormElements/FormAuxiliaries/FormLabel'
import TextEntry from '../../../FormElements/EntryFields/TextEntry'
import TagInput from '../../../FormElements/EntryFields/TagInput'
import MainForm from '../../../FormElements/Containers/MainForm'
import FormTitle from '../../../FormElements/FormAuxiliaries/FormTitle'
import { DataContext } from '../../../DataContext'
import ObjectContainer from '../../../FormElements/Containers/ObjectContainer'
import AddNewButton from '../DynamicAdditionTools/AddNewButton'
import RemoveButton from '../DynamicAdditionTools/RemoveButton'

// Why did i use useWatch and useFieldArray right here, whilst the rest of the form logic is imported from datacontext from create_resume?
// 
const TechnicalSkills = () => {
  const { methods, onSubmit, } = useContext(DataContext)

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "technicalskills"
  })

  return (
    <MainForm onSubmit={methods.handleSubmit(onSubmit)} className='w-250!'>
      {/* //FormProvider is imported here itself */}
      <FormTitle title="Technical Skills"></FormTitle>

      {fields.map((field, index) => {

        return ( // Main form logic
          <ObjectContainer key={field.id} className='flex-row!'>
            <TextEntry item={`technicalskills.${index}.category`} childclassName='min-h-full!' placeholder='Enter Your Tech Stack:' register={methods.register} className='min-w-60!'></TextEntry>
            <TagInput item={`technicalskills.${index}.skillList`} childclassName='min-h-full!' methods={methods} placeholder='Type a skill (e.g. React) and press comma...'/>
            <RemoveButton remove={remove} index={index} className='min-h-full! p-3! text-[17px]'/>
          </ObjectContainer>
        ); // Clean return closure
      })} {/* Clean loop closure (No loose parenthesis or dangling braces) */}

        {fields.length < 5 && <AddNewButton title='Add New Tech Stack →' onClick={() => append({ title: '',skillList:''})}></AddNewButton>}
      
      {/* The above onclick will add to the experience section in particular. For any other form the fields will be different. So it needs to be as an attribute passed as props and not at the object level. */}
    </MainForm>
  )
}

export default TechnicalSkills