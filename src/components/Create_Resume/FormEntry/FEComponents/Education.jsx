import React, { useContext, useEffect } from 'react'
import { useFieldArray } from 'react-hook-form'
import FormLabel from '../../FormElements/FormLabel'
import TextEntry from '../../FormElements/TextEntry'
import FormDiv from '../../FormElements/FormDiv'
import FormSubDiv from '../../FormElements/FormSubDiv'
import MainForm from '../../FormElements/MainForm'
import FormTitle from '../../FormElements/FormTitle'
import DateEntry from '../../FormElements/DateEntry'
import { DataContext } from '../../DataContext'
import TextAreaEntry from '../../FormElements/TextAreaEntry'
import ObjectContainer from '../../FormElements/ObjectContainer'
import AddNewButton from './DynamicAdditionTools/AddNewButton'
import RemoveButton from './DynamicAdditionTools/RemoveButton'

const Education = () => {
  const { Data, setData, liveData, methods, onSubmit, } = useContext(DataContext)

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "experiences"
  })

  useEffect(() => {
    const currentExperiences = methods.getValues("experiences"); // Temp variable for avoiding Strictmode.

    if (!currentExperiences || currentExperiences.length === 0) {
      append({
        jobtitle: '',
        startDate: '',
        jobstate: '',
        employer: '',
        enddate: '',
        jobcity: '',
        jobdescription: ''
      });
    }
  }, [fields, append, methods]);

  return (
    <MainForm onSubmit={methods.handleSubmit(onSubmit)} className='w-250!'>
      {/* //FormProvider is imported here itself */}
      <FormTitle title="Education"></FormTitle>
      {fields.map((field, index) => (
        // fields tracks my active form blocks in the add experience. The problem is when it loads, its an empty list.
        // Result: A completely blank form renders in the UI, We dont want that. We use useEffect to avoid that, as follows:
        // Whenever a fields array is empty, automatically append a blank experience block. Thats as a side effect.

        // map: iterates through the fields one item at a time. For every item it goes through, It stamps a complete copy of ObjectContainer with all input rows in it.

        <ObjectContainer key={field.id}>
          <div className='flex justify-between gap-15'>
            <FormDiv>
              <FormSubDiv>
                <FormLabel label="Job Title:"></FormLabel>
                <TextEntry item={`experiences.${index}.jobtitle`} placeholder='Enter Job Title' register={methods.register}></TextEntry>
              </FormSubDiv>
              <FormSubDiv>
                <FormLabel label="Start Date:"></FormLabel>
                <DateEntry item={`experiences.${index}.startDate`} placeholder='dd-mm-yyyy' register={methods.register}></DateEntry>
              </FormSubDiv>
              <FormSubDiv>
                <FormLabel label="State:" ></FormLabel>
                <TextEntry item={`experiences.${index}.jobstate`} placeholder='State' register={methods.register}></TextEntry>
              </FormSubDiv>
            </FormDiv>
            <FormDiv>
              <FormSubDiv>
                <FormLabel label="Employer:"></FormLabel>
                <TextEntry item={`experiences.${index}.employer`} placeholder='eg., JP Morgan' register={methods.register}></TextEntry>
              </FormSubDiv>
              <FormSubDiv>
                <FormLabel label="End Date:" ></FormLabel>
                <DateEntry item={`experiences.${index}.enddate`} placeholder='dd-mm-yyyy' register={methods.register}></DateEntry>
              </FormSubDiv>
              <FormSubDiv>
                <FormLabel label="City:" ></FormLabel>
                <TextEntry item={`experiences.${index}.jobcity`} placeholder='City' register={methods.register}></TextEntry>
              </FormSubDiv>
            </FormDiv>
          </div>
          <FormSubDiv className='min-h-50! min-w-full flex-col items-start gap-4!'>
            <FormLabel label="Job Description:" ></FormLabel>
            <TextAreaEntry item={`experiences.${index}.jobdescription`} placeholder='Describe your job achievements...' register={methods.register}></TextAreaEntry>
          </FormSubDiv>
          {fields.length > 1 && <RemoveButton remove={remove} index={index} />}
        </ObjectContainer>
      ))}
      <AddNewButton title='Add New Experience →' className='self-start' onClick={() => append({ jobtitle: '', startDate: '', jobstate: '', employer: '', enddate: '', jobcity: '', jobdescription: '' })}></AddNewButton>
      {/* The above onclick will add to the experience section in particular. For any other form the fields will be different. So it needs to be as an attribute passed as props and not at the object level. */}
    </MainForm>
  )
}

export default Education