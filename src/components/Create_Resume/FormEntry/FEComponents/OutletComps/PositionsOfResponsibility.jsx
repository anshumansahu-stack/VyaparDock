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
                    methods.clearErrors(`projects.${index}.endDate`); // Clear any residual errors
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
                position: undefined,
                startDate: undefined,
                organisation: undefined,
                endDate: undefined,
                posdescription: undefined
            });
        }
    }, [fields, append, methods]);

    const handleRemove = (index) => {
        methods.setValue(`responsibilities.${index}.position`, '');
        methods.setValue(`responsibilities.${index}.startDate`, '');
        methods.setValue(`responsibilities.${index}.endDate`, '');
        methods.setValue(`responsibilities.${index}.organisation`, '');
        methods.setValue(`responsibilities.${index}.posdescription`, '');
    };

    // fields tracks my active form blocks in the add experience. The problem is when it loads, its an empty list.
    // Result: A completely blank form renders in the UI, We dont want that. We use useEffect to avoid that, as follows:
    // Whenever a fields array is empty, automatically append a blank experience block. Thats as a side effect.

    // map: iterates through the fields one item at a time. For every item it goes through, It stamps a complete copy of ObjectContainer with all input rows in it.

    return (
        <MainForm onSubmit={methods.handleSubmit(onSubmit)}>
            {/* //FormProvider is imported here itself */}
            <FormTitle title="Positions of Responsibility"></FormTitle>

            {fields.map((field, index) => {

                //watch the checkbox for the render first, if rendered, check whether the value exists or is undefined, if undefined, set false else true.
                const isCurrentJob = watchAllresponsibilities[index]?.isCurrent || false;

                return ( // Main form logic
                    <ObjectContainer key={field.id}>
                        <TextEntryContainer>
                            <FormDiv>
                                <FormSubDiv>
                                    <FormLabel label="Position:"></FormLabel>
                                    <TextEntry
                                        item={`responsibilities.${index}.position`}
                                        placeholder='Enter Position'
                                        register={methods.register}
                                        formState={methods.formState}
                                        control={methods.control}
                                        validation={{
                                            required: "Position is required",
                                            maxLength: { value: 100, message: "Must be under 100 characters" },
                                            pattern: {
                                                value: /^[\p{L}0-9\s.,'&/()-]+$/u,
                                                message: "Contains invalid characters"
                                            }
                                        }}
                                    ></TextEntry>
                                </FormSubDiv>
                                <FormSubDiv className='items-end! min-h-18!'>
                                    <FormLabel label="Start Date:"></FormLabel>
                                    <DateEntry
                                        item={`responsibilities.${index}.startDate`}
                                        placeholder='dd-mm-yyyy'
                                        register={methods.register}
                                        formState={methods.formState}
                                        control={methods.control}
                                        validation={{
                                            required: "Start date is required",
                                            validate: (val) => new Date(val) <= new Date() || "Date cannot be in future"
                                        }}
                                    ></DateEntry>
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
                                        control={methods.control}
                                        validation={{
                                            required: "Organisation name is required",
                                            maxLength: { value: 100, message: "Must be under 100 characters" },
                                            pattern: {
                                                value: /^[\p{L}0-9\s.,'&/()-]+$/u,
                                                message: "Contains invalid characters"
                                            }
                                        }}
                                    ></TextEntry>
                                </FormSubDiv>

                                <FormSubDiv className='flex-col'>
                                    <IsCurrentCheckerButton item={`responsibilities.${index}.isCurrent`} register={methods.register} />

                                    <FormSubDiv>
                                        <FormLabel label="End Date:" ></FormLabel>
                                        <DateEntry
                                            item={`responsibilities.${index}.endDate`}
                                            placeholder='dd-mm-yyyy'
                                            register={methods.register}
                                            disabled={isCurrentJob}
                                            formState={methods.formState}
                                            control={methods.control}
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

                            </FormDiv>

                        </TextEntryContainer>

                        <DescriptionContainer>
                            <FormLabel label="Description:" ></FormLabel>
                            <TextAreaEntry
                                item={`responsibilities.${index}.posdescription`}
                                placeholder='Describe your position...'
                                childclassName='h-30'
                                register={methods.register}
                                formState={methods.formState}
                                control={methods.control}
                                validation={{
                                    required: "Position description is required",
                                    minLength: { value: 20, message: "Please provide more detail (at least 20 characters)" },
                                    maxLength: { value: 1000, message: "Must be under 1000 characters" }
                                }}
                            ></TextAreaEntry>
                        </DescriptionContainer>

                        {fields.length > 1 && <RemoveButton handleRemove={handleRemove} remove={remove} index={index} className='p-0! h-[6vh]' />}
                    </ObjectContainer>
                ); 
            })} 

            <AddNewButton
                title='Add New PoR →'
                type='button'
                onClick={
                    (e) => {
                        e.preventDefault(); //Prevent form submission trigger
                        append({
                            position: undefined,
                            startDate: undefined,
                            organisation: undefined,
                            endDate: undefined,
                            posdescription: undefined
                        })
                    }
                }></AddNewButton>
            {/* The above onclick will add to the experience section in particular. For any other form the fields will be different. So it needs to be as an attribute passed as props and not at the object level. */}
        </MainForm>
    )
}

export default PositionsOfResponsibility