import React, { useContext, useEffect } from 'react'
import { useFieldArray, useWatch } from 'react-hook-form'
import FormLabel from '../../../FormElements/FormAuxiliaries/FormLabel'
import TextEntry from '../../../FormElements/EntryFields/TextEntry'
import FormDiv from '../../../FormElements/Containers/FormDiv'
import FormSubDiv from '../../../FormElements/Containers/FormSubDiv'
import MainForm from '../../../FormElements/Containers/MainForm'
import FormTitle from '../../../FormElements/FormAuxiliaries/FormTitle'
import DateEntry from '../../../FormElements/EntryFields/DateEntry'
import { DataContext } from '../../../DataContext'
import TextAreaEntry from '../../../FormElements/EntryFields/TextAreaEntry'
import ObjectContainer from '../../../FormElements/Containers/ObjectContainer'
import AddNewButton from '../DynamicAdditionTools/AddNewButton'
import RemoveButton from '../DynamicAdditionTools/RemoveButton'
import IsCurrentCheckerButton from '../../../FormElements/FormAuxiliaries/IsCurrentCheckerButton'
import DescriptionContainer from '../../../FormElements/Containers/DescriptionContainer'
import TextEntryContainer from '../../../FormElements/Containers/TextEntryContainer'

// Why did i use useWatch and useFieldArray right here, whilst the rest of the form logic is imported from datacontext from create_resume?
// 
const ProfessionalExperience = () => {
  const { Data, setData, liveData, methods, onSubmit, } = useContext(DataContext)

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "experiences"
  })

  // Whats a nested state and why it happened here?
  // state updation: when i checked the box, useEffect set the enddate value to present.
  // after that as the value changes, methods.watch() creates a new array reference of the same because some data was changed.
  // useEffect runs again to evaluate the entire card layout.
  // This process keeps going on again and again that disabling the enddate is not achieved. 
  // useWatch() hook fixes the same.
 
  const watchAllExperiences = useWatch({ // handling nested states
    control: methods.control,
    name: "experiences"
  }) || [];
  //Just in case there is novalue being recorded by experiences, the initial value will be an empty array.

  // const watchAllExperiences = methods.watch("experiences") || []; 
  // Basically start watching the experiences field array.

  useEffect(() => {
    // Loop through your form entries in memory
    watchAllExperiences.forEach((exp, index) => {
      if (!methods.getValues(`experiences.${index}`)) return; // If no indices found then return
      
      if (exp?.isCurrent) { //isCurrent is the item boolean for the checkbox
        if (methods.getValues(`experiences.${index}.endDate`) !== "Present") { //Avoiding infinite render loops, when its anything other than Present basically.
          methods.setValue(`experiences.${index}.endDate`, "Present");
        }
      } else {
        // If unchecked, clear it back out
        if (methods.getValues(`experiences.${index}.endDate`) === "Present") {
          methods.setValue(`experiences.${index}.endDate`, "");
        }
      }
    });
  }, [watchAllExperiences, methods]);

  useEffect(() => { //Initiation UseEffect
    const currentExperiences = methods.getValues("experiences"); // Temp variable for avoiding Strictmode.

    if (!currentExperiences || currentExperiences.length === 0) {
      append({
        jobtitle: '',
        startDate: '',
        jobstate: '',
        employer: '',
        endDate: '',
        jobcity: '',
        jobdescription: ''
      });
    }
  }, [fields, append, methods]);


  // fields tracks my active form blocks in the add experience. The problem is when it loads, its an empty list.
  // Result: A completely blank form renders in the UI, We dont want that. We use useEffect to avoid that, as follows:
  // Whenever a fields array is empty, automatically append a blank experience block. Thats as a side effect.

  // map: iterates through the fields one item at a time. For every item it goes through, It stamps a complete copy of ObjectContainer with all input rows in it.

  return (
    <MainForm onSubmit={methods.handleSubmit(onSubmit)}>
      {/* //FormProvider is imported here itself */}
      <FormTitle title="Professional Experience"></FormTitle>

      {fields.map((field, index) => {

        //watch the checkbox for the render first, if rendered, check whether the value exists or is undefined, if undefined, set false else true.
        const isCurrentJob = watchAllExperiences[index]?.isCurrent || false;

        return ( // Main form logic
          <ObjectContainer key={field.id} >
            <TextEntryContainer>
              <FormDiv>
                <FormSubDiv>
                  <FormLabel label="Job Title:"></FormLabel>
                  <TextEntry 
                  item={`experiences.${index}.jobtitle`} 
                  placeholder='Enter Job Title' 
                  register={methods.register}
                  formState={methods.formState} 
                  validation={{ required: "Job title is required" }} 
                  ></TextEntry>
                </FormSubDiv>
                <FormSubDiv className='items-end! min-h-18!'>
                  <FormLabel label="Start Date:"></FormLabel>
                  <DateEntry 
                  item={`experiences.${index}.startDate`} 
                  placeholder='dd-mm-yyyy' 
                  register={methods.register}
                  formState={methods.formState}
                  validation={{ 
                      required: "Start date is required",
                      validate: (val) => new Date(val) <= new Date() || "Date cannot be in future"
                  }} 
                  ></DateEntry>
                </FormSubDiv>
                <FormSubDiv>
                  <FormLabel label="State:" ></FormLabel>
                  <TextEntry 
                  item={`experiences.${index}.jobstate`} 
                  placeholder='State' 
                  register={methods.register}
                  formState={methods.formState}
                  validation={{ required: "State is required" }} 
                  ></TextEntry>
                </FormSubDiv>
              </FormDiv>

              <FormDiv>
                <FormSubDiv>
                  <FormLabel label="Employer:"></FormLabel>
                  <TextEntry 
                  item={`experiences.${index}.employer`} 
                  placeholder='eg., JP Morgan' 
                  register={methods.register}
                  formState={methods.formState}
                  validation={{ required: "Employer name is required" }} // ADDED: Validation
                  ></TextEntry>
                </FormSubDiv>

                <FormSubDiv className='flex-col'>
                  {/* FIXED: Passed required attributes so the checkbox registers */}
                  <IsCurrentCheckerButton item={`experiences.${index}.isCurrent`} register={methods.register} />

                  <FormSubDiv>
                    <FormLabel label="End Date:" ></FormLabel>
                    {/* FIXED: Linked disabled={isCurrentJob} , if is current job is true then the value will be disabled else it will not be disabled. */}
                    <DateEntry 
                    item={`experiences.${index}.endDate`} 
                    placeholder='dd-mm-yyyy' 
                    register={methods.register} 
                    disabled={isCurrentJob} 
                    formState={methods.formState}
                    validation={{
                      required: !isCurrentJob ? "End date is required" : false,
                      validate: (value) => {
                        if (isCurrentJob || value === "Present" || !value) return true;
                        const start = methods.getValues(`experiences.${index}.startDate`);
                        if (!start) return true;
                        return new Date(value) > new Date(start) || "Must be after start date";
                      }
                    }}
                    />
                  </FormSubDiv>
                </FormSubDiv>

                <FormSubDiv>
                  <FormLabel label="City:" ></FormLabel>
                  <TextEntry 
                  item={`experiences.${index}.jobcity`} 
                  placeholder='City' 
                  register={methods.register}
                  formState={methods.formState}
                  validation={{ required: "City is required" }}
                  ></TextEntry>
                </FormSubDiv>
              </FormDiv>
            </TextEntryContainer>

            <DescriptionContainer>
              <FormLabel label="Job Description:" ></FormLabel>
              <TextAreaEntry 
              item={`experiences.${index}.jobdescription`} 
              childclassName='h-30'
              placeholder='Describe your job achievements...' 
              register={methods.register}
              formState={methods.formState}
              ></TextAreaEntry>
            </DescriptionContainer>
            
            {fields.length > 1 && <RemoveButton remove={remove} index={index} className='p-0! h-[6vh]'/>}
          </ObjectContainer>
        ); // Clean return closure
      })} {/* Clean loop closure (No loose parenthesis or dangling braces) */}

      <AddNewButton 
      title='Add New Experience →' 
      type='button'
      onClick={
        (e) => {
          e.preventDefault(); //Prevent form submission trigger
          append({ 
          jobtitle: '', 
          startDate: '', 
          jobstate: '', 
          employer: '', 
          endDate: '', 
          jobcity: '', 
          jobdescription: '' 
          })}
        }></AddNewButton>
      {/* The above onclick will add to the experience section in particular. For any other form the fields will be different. So it needs to be as an attribute passed as props and not at the object level. */}
    </MainForm>
  )
}

export default ProfessionalExperience