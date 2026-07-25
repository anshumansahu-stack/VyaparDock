import React, { useContext } from 'react'
import FormLabel from '../../../FormElements/FormAuxiliaries/FormLabel'
import TextEntry from '../../../FormElements/EntryFields/TextEntry'
import FormDiv from '../../../FormElements/Containers/FormDiv'
import FormSubDiv from '../../../FormElements/Containers/FormSubDiv'
import MainForm from '../../../FormElements/Containers/MainForm'
import FormTitle from '../../../FormElements/FormAuxiliaries/FormTitle'
import DateEntry from '../../../FormElements/EntryFields/DateEntry'
import { DataContext } from '../../../DataContext'
import ObjectContainer from '../../../FormElements/Containers/ObjectContainer'

const PersonalDetails = () => {
  const { Data, setData, liveData, methods, onSubmit, } = useContext(DataContext)

  return (
    <MainForm onSubmit={methods.handleSubmit(onSubmit)}>
      {/* //FormProvider is imported here itself */}
      <FormTitle title="Personal Details"></FormTitle>
      <ObjectContainer className='flex-row place-content-around!'>
        <FormDiv>
          <FormSubDiv>
            <FormLabel label="First name:"></FormLabel>
            <TextEntry 
            item='firstname' 
            placeholder='Enter First Name' 
            register={methods.register}
            formState={methods.formState}
            validation={{
              required: "First name is required",
              minLength: { value: 2, message: "Must be at least 2 characters" }
            }}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Role:"></FormLabel>
            <TextEntry 
            item='currRole' 
            placeholder='Enter Current Role' 
            register={methods.register}
            formState={methods.formState}
            validation={{ required: "Current professional title is required" }}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Phone:"></FormLabel>
            <TextEntry 
            item='phone' 
            placeholder='+91-1234567890' 
            register={methods.register}
            formState={methods.formState}
            validation={{
              required: "Phone number is required",
              pattern: { value: /^\+?[0-9\s\-]{10,15}$/, message: "Invalid phone format structure" }
            }}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Email:"></FormLabel>
            <TextEntry 
            item='email' 
            placeholder='abc@dmail.com' 
            register={methods.register}
            formState={methods.formState}
            validation={{
              required: "Email is required",
              pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format" }
            }}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="State:" ></FormLabel>
            <TextEntry 
            item='state' 
            placeholder='State' 
            register={methods.register}
            formState={methods.formState}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Postal Code:"></FormLabel>
            <TextEntry 
            item='postalcode' 
            placeholder='654321' 
            register={methods.register}
            formState={methods.formState}
            validation={{
              pattern: { value: /^\d{4,10}$/, message: "Postal code must be 4 to 10 numerical digits" }
            }}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="LinkedIn:" ></FormLabel>
            <TextEntry 
            item='linkedin' 
            placeholder='linkedin.com/' 
            register={methods.register}
            formState={methods.formState}
            ></TextEntry>
          </FormSubDiv>
        </FormDiv>
        <FormDiv>
          <FormSubDiv>
            <FormLabel label="Last name:"></FormLabel>
            <TextEntry 
            item='lastname' 
            placeholder='Enter Last Name' 
            register={methods.register}
            formState={methods.formState}
              validation={{ required: "Last name is required" }}></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Organisation:"></FormLabel>
            <TextEntry 
            item='currOrg' 
            placeholder='Current Organisation' 
            register={methods.register}
            formState={methods.formState}
            validation={{
              required: "Name of Current Organisation is required",
              minLength: { value: 2, message: "Must be at least 2 characters" }
            }}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Alt. Phone:"> </FormLabel>
            <TextEntry 
            item='altphone' 
            placeholder='+91-0987654321' 
            register={methods.register}
            formState={methods.formState}
            validation={{
              pattern: { value: /^\+?[0-9\s\-]{10,15}$/, message: "Invalid alternative phone format" }
            }}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="City:" ></FormLabel>
            <TextEntry 
            item='city' 
            placeholder='City' 
            register={methods.register}
            formState={methods.formState}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Country:" ></FormLabel>
            <TextEntry 
            item='country' 
            placeholder='Country' 
            register={methods.register}
            formState={methods.formState}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Github Link:" ></FormLabel>
            <TextEntry 
            item='github' 
            placeholder='Paste link here' 
            register={methods.register}
            formState={methods.formState}
            ></TextEntry>
          </FormSubDiv>
        </FormDiv>
      </ObjectContainer>
    </MainForm>
  )
}

export default PersonalDetails