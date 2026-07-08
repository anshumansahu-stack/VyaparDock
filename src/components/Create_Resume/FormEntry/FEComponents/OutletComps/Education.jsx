import React, { useContext, useEffect } from 'react'
import { useFieldArray, useWatch } from 'react-hook-form'
import FormLabel from '../../../FormElements/FormLabel'
import TextEntry from '../../../FormElements/TextEntry'
import FormDiv from '../../../FormElements/FormDiv'
import FormSubDiv from '../../../FormElements/FormSubDiv'
import MainForm from '../../../FormElements/MainForm'
import FormTitle from '../../../FormElements/FormTitle'
import DateEntry from '../../../FormElements/DateEntry'
import { DataContext } from '../../../DataContext'
import TextAreaEntry from '../../../FormElements/TextAreaEntry'
import ObjectContainer from '../../../FormElements/ObjectContainer'
import AddNewButton from '../DynamicAdditionTools/AddNewButton'
import RemoveButton from '../DynamicAdditionTools/RemoveButton'
import IsCurrentCheckerButton from '../../../FormElements/IsCurrentCheckerButton'

// Why did i use useWatch and useFieldArray right here, whilst the rest of the form logic is imported from datacontext from create_resume?
// 
const Education = () => {
  const { Data, setData, liveData, methods, onSubmit, } = useContext(DataContext)

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "education"
  })

  // Whats a nested state and why it happened here?
  // state updation: when i checked the box, useEffect set the enddate value to present.
  // after that as the value changes, methods.watch() creates a new array reference of the same because some data was changed.
  // useEffect runs again to evaluate the entire card layout.
  // This process keeps going on again and again that disabling the enddate is not achieved. 
  // useWatch() hook fixes the same.
 
  const watchAllEducation = useWatch({ // handling nested states
    control: methods.control,
    name: "education"
  }) || [];
  //Just in case there is novalue being recorded by experiences, the initial value will be an empty array.

  // const watchAllExperiences = methods.watch("experiences") || []; 
  // Basically start watching the experiences field array.

  useEffect(() => {
    // Loop through your form entries in memory
    watchAllEducation.forEach((exp, index) => {
      if (!methods.getValues(`education.${index}`)) return; // If no indices found then return
      
      if (exp?.isCurrent) { //isCurrent is the item boolean for the checkbox
        if (methods.getValues(`education.${index}.enddate`) !== "Present") { //Avoiding infinite render loops, when its anything other than Present basically.
          methods.setValue(`education.${index}.enddate`, "Present");
        }
      } else {
        // If unchecked, clear it back out
        if (methods.getValues(`education.${index}.enddate`) === "Present") {
          methods.setValue(`education.${index}.enddate`, "");
        }
      }
    });
  }, [watchAllEducation, methods]);

  useEffect(() => {
      const currentEducation = methods.getValues("education"); // Temp variable for avoiding Strictmode.
  
      if (!currentEducation || currentEducation.length === 0) {
        append({
          organisation: '',
          startDate: '',
          studystate: '',
          degree: '',
          enddate: '',
          studycity: '',
          edudescription: ''
        });
      }
    }, [fields, append, methods]);


  // fields tracks my active form blocks in the add experience. The problem is when it loads, its an empty list.
  // Result: A completely blank form renders in the UI, We dont want that. We use useEffect to avoid that, as follows:
  // Whenever a fields array is empty, automatically append a blank experience block. Thats as a side effect.

  // map: iterates through the fields one item at a time. For every item it goes through, It stamps a complete copy of ObjectContainer with all input rows in it.

  return (
    <MainForm onSubmit={methods.handleSubmit(onSubmit)} className='w-250!'>
      {/* //FormProvider is imported here itself */}
      <FormTitle title="Education"></FormTitle>

      {fields.map((field, index) => {

        //watch the checkbox for the render first, if rendered, check whether the value exists or is undefined, if undefined, set false else true.
        const isCurrentJob = watchAllEducation[index]?.isCurrent || false;

        return ( // Main form logic
          <ObjectContainer key={field.id}>
            <div className='flex justify-between gap-15'>
              <FormDiv>
                <FormSubDiv>
                  <FormLabel label="Organisation:"></FormLabel>
                  <TextEntry item={`education.${index}.organisation`} placeholder='Enter Organisation' register={methods.register}></TextEntry>
                </FormSubDiv>
                <FormSubDiv className='items-end! min-h-18!'>
                  <FormLabel label="Start Date:"></FormLabel>
                  <DateEntry item={`education.${index}.startDate`} placeholder='dd-mm-yyyy' register={methods.register}></DateEntry>
                </FormSubDiv>
                <FormSubDiv>
                  <FormLabel label="State:" ></FormLabel>
                  <TextEntry item={`education.${index}.studystate`} placeholder='State' register={methods.register}></TextEntry>
                </FormSubDiv>
              </FormDiv>

              <FormDiv>
                <FormSubDiv>
                  <FormLabel label="Degree:"></FormLabel>
                  <TextEntry item={`education.${index}.degree`} placeholder='eg., 10th,Bachelors' register={methods.register}></TextEntry>
                </FormSubDiv>

                <FormSubDiv className='flex-col'>
                  {/* FIXED: Passed required attributes so the checkbox registers */}
                  <IsCurrentCheckerButton item={`education.${index}.isCurrent`} register={methods.register} />

                  <FormSubDiv>
                    <FormLabel label="End Date:" ></FormLabel>
                    {/* FIXED: Linked disabled={isCurrentJob} , if is current job is true then the value will be disabled else it will not be disabled. */}
                    <DateEntry item={`education.${index}.enddate`} placeholder='dd-mm-yyyy' register={methods.register} disabled={isCurrentJob} />
                  </FormSubDiv>
                </FormSubDiv>

                <FormSubDiv>
                  <FormLabel label="City:" ></FormLabel>
                  <TextEntry item={`education.${index}.studycity`} placeholder='City' register={methods.register}></TextEntry>
                </FormSubDiv>
              </FormDiv>
            </div>

            <FormSubDiv className='min-h-50! min-w-full flex-col items-start gap-4!'>
              <FormLabel label="Description:" ></FormLabel>
              <TextAreaEntry item={`education.${index}.edudescription`} placeholder='Describe your education...' register={methods.register}></TextAreaEntry>
            </FormSubDiv>
            {fields.length > 1 && <RemoveButton remove={remove} index={index} />}
          </ObjectContainer>
        ); // Clean return closure
      })} {/* Clean loop closure (No loose parenthesis or dangling braces) */}

      <AddNewButton title='Add New Education →' className='self-start' onClick={() => append({organisation: '', startDate: '', studystate: '', degree: '', enddate: '', studycity: '', edudescription: '' })}></AddNewButton>
      {/* The above onclick will add to the experience section in particular. For any other form the fields will be different. So it needs to be as an attribute passed as props and not at the object level. */}
    </MainForm>
  )
}

export default Education