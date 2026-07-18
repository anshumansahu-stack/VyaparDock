import React, { useContext } from 'react'
import { useFieldArray } from 'react-hook-form'
import FormLabel from '../../../FormElements/FormAuxiliaries/FormLabel'
import TextEntry from '../../../FormElements/EntryFields/TextEntry'
import TextAreaEntry from '../../../FormElements/EntryFields/TextAreaEntry'
import MainForm from '../../../FormElements/Containers/MainForm'
import FormTitle from '../../../FormElements/FormAuxiliaries/FormTitle'
import { DataContext } from '../../../DataContext'
import ObjectContainer from '../../../FormElements/Containers/ObjectContainer'
import AddNewButton from '../DynamicAdditionTools/AddNewButton'
import RemoveButton from '../DynamicAdditionTools/RemoveButton'

const AchievementsAndCertifications = () => {
  const { methods, onSubmit, } = useContext(DataContext)

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "achievementsandcertifications"
  })

  return (
    <MainForm onSubmit={methods.handleSubmit(onSubmit)}>

      <FormTitle title="Achievements and Certifications"></FormTitle>

      {fields.map((field, index) => {
        return ( // Main form logic
          <ObjectContainer key={field.id} className='flex-row! w-full! place-content-around!'>
            <TextEntry
              item={`achievementsandcertifications.${index}.achtitle`}
              childclassName='min-h-full!'
              placeholder='Enter Achievement:'
              register={methods.register}
              formState={methods.formState} 
              validation={{ required: "Achievement is required!" }}
              className='min-w-1/4!'
            ></TextEntry>
            <TextEntry
              item={`achievementsandcertifications.${index}.achdesc`}
              className='min-w-[55%]'
              childclassName='min-h-full! '
              placeholder='Describe your Achievement:'
              register={methods.register}
              formState={methods.formState} 
              validation={{ required: "Description is required!" }}
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
          append({ achtitle: '', achdesc: '' })
        }
        }></AddNewButton>

    </MainForm>
  )
}

export default AchievementsAndCertifications