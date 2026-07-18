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
import SuggestionEntry from '../../../FormElements/TextFields/SuggestionText'
import FormSubSubDiv from '../../../FormElements/Containers/FormSubSubDiv'
import TextEntryContainer from '../../../FormElements/Containers/TextEntryContainer'

// Why did i use useWatch and useFieldArray right here, whilst the rest of the form logic is imported from datacontext from create_resume?
// 
const Education = () => {
  const { Data, setData, liveData, methods, onSubmit, } = useContext(DataContext)

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "education"
  })

  // Whats a nested state and why it happened here?
  // state updation: when i checked the box, useEffect set the endDate value to present.
  // after that as the value changes, methods.watch() creates a new array reference of the same because some data was changed.
  // useEffect runs again to evaluate the entire card layout.
  // This process keeps going on again and again that disabling the endDate is not achieved. 
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
        if (methods.getValues(`education.${index}.endDate`) !== "Present") { //Avoiding infinite render loops, when its anything other than Present basically.
          methods.setValue(`education.${index}.endDate`, "Present");
        }
      } else {
        // If unchecked, clear it back out
        if (methods.getValues(`education.${index}.endDate`) === "Present") {
          methods.setValue(`education.${index}.endDate`, "");
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
        studyboard: '',
        degree: '',
        endDate: '',
        cgpa: ''
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
      <FormTitle title="Education"></FormTitle>

      {fields.map((field, index) => {

        //watch the checkbox for the render first, if rendered, check whether the value exists or is undefined, if undefined, set false else true.
        const isCurrentJob = watchAllEducation[index]?.isCurrent || false;

        return ( // Main form logic
          <ObjectContainer key={field.id}>
            <TextEntryContainer>
              <FormDiv>
                <FormSubDiv>
                  <FormLabel label="Organisation:"></FormLabel>
                  <TextEntry
                    key={`${field.id}-organisation`}
                    item={`education.${index}.organisation`}
                    placeholder='Enter Organisation'
                    register={methods.register}
                    formState={methods.formState}
                    validation={{ required: "School or University name is required" }}
                  ></TextEntry>
                </FormSubDiv>
                <FormSubDiv className='items-end! min-h-18!'>
                  <FormLabel label="Start Date:"></FormLabel>
                  <DateEntry
                    key={`${field.id}-startDate`}
                    item={`education.${index}.startDate`}
                    placeholder='dd-mm-yyyy'
                    register={methods.register}
                    formState={methods.formState}
                    validation={{
                      required: "Start date is required",
                      validate: (value) => {
                        if (!value) return true;
                        const selectedDate = new Date(value);
                        const today = new Date();
                        return selectedDate < today || "Start date cannot be in the future";
                      }
                    }}
                  ></DateEntry>
                </FormSubDiv>
                <FormSubDiv>
                  <FormSubSubDiv>
                    <FormLabel label="Board:" ></FormLabel>
                    <SuggestionEntry text='(Mention State if State Board)' />
                  </FormSubSubDiv>
                  <TextEntry
                    key={`${field.id}-studyboard`}
                    item={`education.${index}.studyboard`}
                    placeholder='e.g., CBSE'
                    register={methods.register}
                    formState={methods.formState}
                  ></TextEntry>
                </FormSubDiv>
              </FormDiv>

              <FormDiv>
                <FormSubDiv>
                  <FormLabel label="Degree:"></FormLabel>
                  <TextEntry
                    key={`${field.id}-degree`}
                    item={`education.${index}.degree`}
                    placeholder='eg., 10th,Bachelors'
                    register={methods.register}
                    formState={methods.formState}
                    validation={{ required: "Degree qualification type is required" }}
                  ></TextEntry>
                </FormSubDiv>

                <FormSubDiv className='flex-col'>
                  <IsCurrentCheckerButton item={`education.${index}.isCurrent`} register={methods.register} />

                  <FormSubDiv>
                    <FormLabel label="End Date:" ></FormLabel>
                    <DateEntry
                      key={`${field.id}-endDate`}
                      item={`education.${index}.endDate`}
                      placeholder='dd-mm-yyyy'
                      register={methods.register}
                      disabled={isCurrentJob}
                      formState={methods.formState}
                      validation={{
                        required: "End date/Present selection is required",
                        validate: (value) => {
                          if (value === "Present") return true;
                          if (!value) return true;

                          const startDateVal = methods.getValues(`education.${index}.startDate`);
                          if (!startDateVal) return true;

                          const start = new Date(startDateVal);
                          const end = new Date(value);
                          return end > start || "End date must be after the start date";
                        }
                      }}
                    />
                  </FormSubDiv>
                </FormSubDiv>

                <FormSubDiv>
                  <FormSubSubDiv>
                    <FormLabel label="CGPA:" ></FormLabel>
                    <SuggestionEntry text='(Percentage/9.5)=CGPA' />
                  </FormSubSubDiv>
                  <TextEntry
                    key={`${field.id}-cgpa`}
                    item={`education.${index}.cgpa`}
                    placeholder='eg.,7.65'
                    register={methods.register}
                    formState={methods.formState}
                    validation={{
                      required: !isCurrentJob ? "CGPA/Marks metric input is required" : false,

                      pattern: !isCurrentJob ? {
                        value: /^[0-9](\.[0-9]{1,2})?$|^10(\.0{1,2})?$/,
                        message: "Invalid evaluation range (0.00 - 10.00)"
                      } : undefined
                    }}
                  ></TextEntry>
                </FormSubDiv>
              </FormDiv>
            </TextEntryContainer>

            {fields.length > 1 && <RemoveButton remove={remove} index={index} className='p-0! h-[6vh]'/>}
          </ObjectContainer>
        ); // Clean return closure
      })} {/* Clean loop closure (No loose parenthesis or dangling braces) */}

      <AddNewButton
        title='Add New Education →'
        type='button'
        onClick={
          // Auto error-trigger on new block prevention:
          (e) => {
            e.preventDefault();
            append({
              organisation: '',
              startDate: '',
              studyboard: '',
              degree: '',
              endDate: '',
              cgpa: '',
              edudescription: ''
            });
          }}></AddNewButton>
      {/* The above onclick will add to the experience section in particular. For any other form the fields will be different. So it needs to be as an attribute passed as props and not at the object level. */}
    </MainForm>
  )
}

export default Education