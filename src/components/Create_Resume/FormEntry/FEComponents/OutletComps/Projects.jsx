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
import DescriptionContainer from '../../../FormElements/Containers/DescriptionContainer'

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
                if (methods.getValues(`projects.${index}.endDate`) !== "Present") { //Avoiding infinite render loops, when its anything other than Present basically.
                    methods.setValue(`projects.${index}.endDate`, "Present");
                }
            } else {
                // If unchecked, clear it back out
                if (methods.getValues(`projects.${index}.endDate`) === "Present") {
                    methods.setValue(`projects.${index}.endDate`, "");
                }
            }
        });
    }, [watchAllProjects, methods]);

    useEffect(() => { //Initiation UseEffect
        const currentProjects = methods.getValues("projects"); // Temp variable for avoiding Strictmode.

        // ⚡ FIX: Sync the mount initialization schema keys
        if (!currentProjects || currentProjects.length === 0) {
            append({ 
                projecttitle: '', 
                startDate: '', 
                endDate: '', 
                projectdescription: '', 
                skillstack: [] 
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
            <FormTitle title="Projects"></FormTitle>

            {fields.map((field, index) => {

                //watch the checkbox for the render first, if rendered, check whether the value exists or is undefined, if undefined, set false else true.
                const isCurrentJob = watchAllProjects[index]?.isCurrent || false;

                return ( // Main form logic
                    <ObjectContainer key={field.id}>
                        <div className='flex justify-between gap-15'>
                            <FormSubDiv className='flex-col! items-center justify-center'>
                                <FormLabel label="Project Title:" className="justify-center!"></FormLabel>
                                <TextEntry
                                    item={`projects.${index}.projecttitle`}
                                    placeholder='Enter Project Title'
                                    register={methods.register}
                                    childclassName='min-w-70! min-h-30!'
                                    formState={methods.formState} // Insulation
                                    validation={{ required: "Project title is required" }}
                                ></TextEntry>
                            </FormSubDiv>
                            <FormDiv>
                                <FormSubDiv className='items-end! min-h-18!'>
                                    <FormLabel label="Start Date:"></FormLabel>
                                    <DateEntry
                                        item={`projects.${index}.startDate`}
                                        placeholder='dd-mm-yyyy'
                                        register={methods.register}
                                        formState={methods.formState}
                                        validation={{
                                            required: "Start date is required",
                                            validate: (val) => new Date(val) <= new Date() || "Date cannot be in future"
                                        }}
                                    ></DateEntry>
                                </FormSubDiv>

                                <FormSubDiv className='flex-col'>
                                    <IsCurrentCheckerButton item={`projects.${index}.isCurrent`} register={methods.register} value='I am Currently working on this project' className='min-w-80' />

                                    <FormSubDiv>
                                        <FormLabel label="End Date:" ></FormLabel>
                                        <DateEntry
                                            item={`projects.${index}.endDate`}
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


                            </FormDiv>
                        </div>

                        <DescriptionContainer>
                            <FormLabel label="Project Description:" ></FormLabel>
                            <TextAreaEntry 
                            item={`projects.${index}.projectdescription`} 
                            placeholder='Describe your project in 1-2 lines...' 
                            register={methods.register} 
                            className='h-30'
                            formState={methods.formState}
                            ></TextAreaEntry>
                        </DescriptionContainer>

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
            })}

            <AddNewButton 
            title='Add New Project →' 
            className='self-start' 
            onClick={
                (e) => {
                    e.preventDefault();
                    append({ 
                    projecttitle: '', 
                    startDate: '', 
                    endDate: '', 
                    projectdescription: '', 
                    skillstack: [] })}}
                    ></AddNewButton>
        </MainForm>
    )
}

export default Projects