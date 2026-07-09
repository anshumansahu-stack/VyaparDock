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
import TagInput from '../../../FormElements/EntryFields/TagInput'

// Why did i use useWatch and useFieldArray right here, whilst the rest of the form logic is imported from datacontext from create_resume?
// 
const Projects = () => {
    const { Data, setData, liveData, methods, onSubmit, } = useContext(DataContext)

    const { fields, append, remove } = useFieldArray({
        control: methods.control,
        name: "projects"
    })

    // Whats a nested state and why it happened here?
    // state updation: when i checked the box, useEffect set the enddate value to present.
    // after that as the value changes, methods.watch() creates a new array reference of the same because some data was changed.
    // useEffect runs again to evaluate the entire card layout.
    // This process keeps going on again and again that disabling the enddate is not achieved. 
    // useWatch() hook fixes the same.

    const watchAllProjects = useWatch({ // handling nested states
        control: methods.control,
        name: "projects"
    }) || [];
    //Just in case there is novalue being recorded by experiences, the initial value will be an empty array.

    // const watchAllExperiences = methods.watch("experiences") || []; 
    // Basically start watching the experiences field array.

    useEffect(() => {
        // Loop through your form entries in memory
        watchAllProjects.forEach((exp, index) => {
            if (!methods.getValues(`projects.${index}`)) return; // If no indices found then return

            if (exp?.isCurrent) { //isCurrent is the item boolean for the checkbox
                if (methods.getValues(`projects.${index}.enddate`) !== "Present") { //Avoiding infinite render loops, when its anything other than Present basically.
                    methods.setValue(`projects.${index}.enddate`, "Present");
                }
            } else {
                // If unchecked, clear it back out
                if (methods.getValues(`projects.${index}.enddate`) === "Present") {
                    methods.setValue(`projects.${index}.enddate`, "");
                }
            }
        });
    }, [watchAllProjects, methods]);

    useEffect(() => { //Initiation UseEffect
        const currentProjects = methods.getValues("projects"); // Temp variable for avoiding Strictmode.

        // ⚡ FIX: Sync the mount initialization schema keys
        if (!currentProjects || currentProjects.length === 0) {
            append({ projecttitle: '', startDate: '', isCurrent: false, enddate: '', projectdescription: '', skillstack: [] });
        }

    }, [fields, append, methods]);


    // fields tracks my active form blocks in the add experience. The problem is when it loads, its an empty list.
    // Result: A completely blank form renders in the UI, We dont want that. We use useEffect to avoid that, as follows:
    // Whenever a fields array is empty, automatically append a blank experience block. Thats as a side effect.

    // map: iterates through the fields one item at a time. For every item it goes through, It stamps a complete copy of ObjectContainer with all input rows in it.

    return (
        <MainForm onSubmit={methods.handleSubmit(onSubmit)} className='w-250!'>
            {/* //FormProvider is imported here itself */}
            <FormTitle title="Projects"></FormTitle>

            {fields.map((field, index) => {

                //watch the checkbox for the render first, if rendered, check whether the value exists or is undefined, if undefined, set false else true.
                const isCurrentJob = watchAllProjects[index]?.isCurrent || false;

                return ( // Main form logic
                    <ObjectContainer key={field.id}>
                        <div className='flex justify-between gap-15'>
                            <FormSubDiv className='flex-col! items-center justify-center'>
                                <FormLabel label="Project Title:" className="justify-center!"></FormLabel>
                                <TextEntry item={`projects.${index}.projecttitle`} placeholder='Enter Project Title' register={methods.register} childclassName='min-w-70! min-h-30!'></TextEntry>
                            </FormSubDiv>
                            <FormDiv>
                                <FormSubDiv className='items-end! min-h-18!'>
                                    <FormLabel label="Start Date:"></FormLabel>
                                    <DateEntry item={`projects.${index}.startDate`} placeholder='dd-mm-yyyy' register={methods.register}></DateEntry>
                                </FormSubDiv>

                                <FormSubDiv className='flex-col'>
                                    {/* FIXED: Passed required attributes so the checkbox registers */}
                                    <IsCurrentCheckerButton item={`projects.${index}.isCurrent`} register={methods.register} value='I am Currently working on this project' className='min-w-80' />

                                    <FormSubDiv>
                                        <FormLabel label="End Date:" ></FormLabel>
                                        {/* FIXED: Linked disabled={isCurrentJob} , if is current job is true then the value will be disabled else it will not be disabled. */}
                                        <DateEntry item={`projects.${index}.enddate`} placeholder='dd-mm-yyyy' register={methods.register} disabled={isCurrentJob} />
                                    </FormSubDiv>
                                </FormSubDiv>


                            </FormDiv>
                        </div>

                        <FormSubDiv className='min-h-30! min-w-full flex-col items-start justify-start gap-4!'>
                            <FormLabel label="Project Description:" ></FormLabel>
                            <TextAreaEntry item={`projects.${index}.projectdescription`} placeholder='Describe your project in 1-2 lines...' register={methods.register} className='max-h-20'></TextAreaEntry>
                        </FormSubDiv>
                        <FormSubDiv className='min-h-24! min-w-full flex-col items-start justify-start gap-3!'>
                            <FormLabel label="Skill Stack Used:" ></FormLabel>

                            <TagInput
                                item={`projects.${index}.skillstack`}
                                methods={methods}
                                placeholder='Type a tool (e.g. React) and press comma...'
                            />
                        </FormSubDiv>
                        {fields.length > 1 && <RemoveButton remove={remove} index={index} />}
                    </ObjectContainer>
                ); // Clean return closure
            })} {/* Clean loop closure (No loose parenthesis or dangling braces) */}

            <AddNewButton title='Add New Project →' className='self-start' onClick={() => append({ projecttitle: '', startDate: '', isCurrent: false, enddate: '', projectdescription: '', skillstack: [] })}></AddNewButton>
            {/* The above onclick will add to the experience section in particular. For any other form the fields will be different. So it needs to be as an attribute passed as props and not at the object level. */}
        </MainForm>
    )
}

export default Projects