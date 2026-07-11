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

// Why did i use useWatch and useFieldArray right here, whilst the rest of the form logic is imported from datacontext from create_resume?
// 
const PositionsOfResponsibility = () => {
    const { Data, setData, liveData, methods, onSubmit, } = useContext(DataContext)

    const { fields, append, remove } = useFieldArray({
        control: methods.control,
        name: "responsibilities"
    })

    // Whats a nested state and why it happened here?
    // state updation: when i checked the box, useEffect set the enddate value to present.
    // after that as the value changes, methods.watch() creates a new array reference of the same because some data was changed.
    // useEffect runs again to evaluate the entire card layout.
    // This process keeps going on again and again that disabling the enddate is not achieved. 
    // useWatch() hook fixes the same.

    const watchAllresponsibilities = useWatch({ // handling nested states
        control: methods.control,
        name: "responsibilities"
    }) || [];
    //Just in case there is novalue being recorded by responsibilities, the initial value will be an empty array.

    // const watchAllresponsibilities = methods.watch("responsibilities") || []; 
    // Basically start watching the responsibilities field array.

    useEffect(() => {
        // Loop through your form entries in memory
        if (watchAllresponsibilities.length === 0) return; // Prevent Infinite rendering

        watchAllresponsibilities.forEach((exp, index) => {
            if (!methods.getValues(`responsibilities.${index}`)) return; // If no indices found then return

            if (exp?.isCurrent) { //isCurrent is the item boolean for the checkbox
                if (methods.getValues(`responsibilities.${index}.endDate`) !== "Present") { //Avoiding infinite render loops, when its anything other than Present basically.
                    methods.setValue(`responsibilities.${index}.endDate`, "Present");
                }
            } else {
                // If unchecked, clear it back out
                if (methods.getValues(`responsibilities.${index}.endDate`) === "Present") {
                    methods.setValue(`responsibilities.${index}.endDate`, "");
                }
            }
        });
    }, [watchAllresponsibilities, methods]);

    useEffect(() => { //Initiation UseEffect
        const currentResponsibilities = methods.getValues("responsibilities"); // Temp variable for avoiding Strictmode.

        if (!currentResponsibilities || currentResponsibilities.length === 0) {
            append({
                position: '',
                startDate: '',
                responstate: '',
                organisation: '',
                endDate: '',
                responcity: '',
                posdescription: ''
            });
        }
    }, [fields.length, append, methods]);


    // fields tracks my active form blocks in the add experience. The problem is when it loads, its an empty list.
    // Result: A completely blank form renders in the UI, We dont want that. We use useEffect to avoid that, as follows:
    // Whenever a fields array is empty, automatically append a blank experience block. Thats as a side effect.

    // map: iterates through the fields one item at a time. For every item it goes through, It stamps a complete copy of ObjectContainer with all input rows in it.

    return (
        <MainForm onSubmit={methods.handleSubmit(onSubmit)} className='w-250!'>
            {/* //FormProvider is imported here itself */}
            <FormTitle title="Positions of Responsibility"></FormTitle>

            {fields.map((field, index) => {

                //watch the checkbox for the render first, if rendered, check whether the value exists or is undefined, if undefined, set false else true.
                const isCurrentJob = watchAllresponsibilities[index]?.isCurrent || false;

                return ( // Main form logic
                    <ObjectContainer key={field.id}>
                        <div className='flex justify-between gap-15'>
                            <FormDiv>
                                <FormSubDiv>
                                    <FormLabel label="Position:"></FormLabel>
                                    <TextEntry
                                        item={`responsibilities.${index}.position`}
                                        placeholder='Enter Position'
                                        register={methods.register}
                                        formState={methods.formState}
                                        validation={{ required: "Position is required" }}
                                    ></TextEntry>
                                </FormSubDiv>
                                <FormSubDiv className='items-end! min-h-18!'>
                                    <FormLabel label="Start Date:"></FormLabel>
                                    <DateEntry
                                        item={`responsibilities.${index}.startDate`}
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
                                        item={`responsibilities.${index}.responstate`}
                                        placeholder='State'
                                        register={methods.register}
                                        formState={methods.formState}
                                        validation={{ required: "State is required" }}
                                    ></TextEntry>
                                </FormSubDiv>
                            </FormDiv>

                            <FormDiv>
                                <FormSubDiv>
                                    <FormLabel label="Organisation:"></FormLabel>
                                    <TextEntry
                                        item={`responsibilities.${index}.organisation`}
                                        placeholder='eg., JP Morgan'
                                        register={methods.register}
                                        formState={methods.formState}
                                        validation={{ required: "Organisation name is required" }} // ADDED: Validation
                                    ></TextEntry>
                                </FormSubDiv>

                                <FormSubDiv className='flex-col'>
                                    {/* FIXED: Passed required attributes so the checkbox registers */}
                                    <IsCurrentCheckerButton item={`responsibilities.${index}.isCurrent`} register={methods.register} />

                                    <FormSubDiv>
                                        <FormLabel label="End Date:" ></FormLabel>
                                        {/* FIXED: Linked disabled={isCurrentJob} , if is current job is true then the value will be disabled else it will not be disabled. */}
                                        <DateEntry
                                            item={`responsibilities.${index}.endDate`}
                                            placeholder='dd-mm-yyyy'
                                            register={methods.register}
                                            disabled={isCurrentJob}
                                            formState={methods.formState}
                                            validation={{
                                                required: !isCurrentJob ? "End date is required" : false,
                                                validate: (value) => {
                                                    if (isCurrentJob || value === "Present" || !value) return true;
                                                    const start = methods.getValues(`responsibilities.${index}.startDate`);
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
                                        item={`responsibilities.${index}.responcity`}
                                        placeholder='City'
                                        register={methods.register}
                                        formState={methods.formState}
                                        validation={{ required: "City is required" }}
                                    ></TextEntry>
                                </FormSubDiv>
                            </FormDiv>
                        </div>

                        <DescriptionContainer>
                            <FormLabel label="Description:" ></FormLabel>
                            <TextAreaEntry
                                item={`responsibilities.${index}.posdescription`}
                                placeholder='Describe your position...'
                                register={methods.register}
                                formState={methods.formState}
                            ></TextAreaEntry>
                        </DescriptionContainer>

                        {fields.length > 1 && <RemoveButton remove={remove} index={index} />}
                    </ObjectContainer>
                ); // Clean return closure
            })} {/* Clean loop closure (No loose parenthesis or dangling braces) */}

            <AddNewButton
                title='Add New Experience →'
                className='self-start'
                type='button'
                onClick={
                    (e) => {
                        e.preventDefault(); //Prevent form submission trigger
                        append({
                            position: '',
                            startDate: '',
                            responstate: '',
                            organisation: '',
                            endDate: '',
                            responcity: '',
                            posdescription: ''
                        })
                    }
                }></AddNewButton>
            {/* The above onclick will add to the experience section in particular. For any other form the fields will be different. So it needs to be as an attribute passed as props and not at the object level. */}
        </MainForm>
    )
}

export default PositionsOfResponsibility