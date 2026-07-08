import React, { useContext } from 'react'
import { useFieldArray } from 'react-hook-form'
import FormLabel from '../../../FormElements/FormLabel'
import TextEntry from '../../../FormElements/TextEntry'
import MainForm from '../../../FormElements/MainForm'
import FormTitle from '../../../FormElements/FormTitle'
import { DataContext } from '../../../DataContext'
import ObjectContainer from '../../../FormElements/ObjectContainer'
import AddNewButton from '../DynamicAdditionTools/AddNewButton'
import RemoveButton from '../DynamicAdditionTools/RemoveButton'

// Why did i use useWatch and useFieldArray right here, whilst the rest of the form logic is imported from datacontext from create_resume?
// 
const TechnicalProficiencies = () => {
  const { methods, onSubmit, } = useContext(DataContext)

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "technicalproficiencies"
  })

  return (
    <MainForm onSubmit={methods.handleSubmit(onSubmit)} className='w-250!'>
      {/* //FormProvider is imported here itself */}
      <FormTitle title="Technical Proficiencies"></FormTitle>
      <p className='font-bold font-[Lora] text-[20px] text-white text-center'>Top 5 of your tech stack, relevant to the job.</p>

      {fields.map((field, index) => {

        return ( // Main form logic
          <ObjectContainer key={field.id} className='flex-row!'>
            <TextEntry item={`technicalproficiencies.${index}.title`} placeholder='Enter Your Tech Stack:' register={methods.register} className='min-w-60!'></TextEntry>
            <RemoveButton remove={remove} index={index} className='max-h-8 p-1! text-[17px]'/>
          </ObjectContainer>
        ); // Clean return closure
      })} {/* Clean loop closure (No loose parenthesis or dangling braces) */}

        {fields.length < 5 && <AddNewButton title='Add New Tech Stack →' onClick={() => append({ title: ''})}></AddNewButton>}
      
      {/* The above onclick will add to the experience section in particular. For any other form the fields will be different. So it needs to be as an attribute passed as props and not at the object level. */}
    </MainForm>
  )
}

export default TechnicalProficiencies