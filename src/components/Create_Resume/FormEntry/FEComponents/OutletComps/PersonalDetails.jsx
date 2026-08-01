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
                minLength: { value: 2, message: "Must be at least 2 characters" },
                maxLength: { value: 50, message: "Must be under 50 characters" },
                pattern: {
                  value: /^[A-Za-z\s'-]+$/,
                  message: "Only letters, spaces, hyphens, and apostrophes allowed"
                }
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
              validation={{
                required: "Current professional title is required",
                minLength: { value: 2, message: "Must be at least 2 characters" },
                maxLength: { value: 100, message: "Must be under 100 characters" },
                pattern: {
                  value: /^[A-Za-z0-9\s.,'&/()-]+$/,
                  message: "Contains invalid characters"
                }
              }}
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
              validation={{
                maxLength: { value: 56, message: "Must be under 56 characters" },// Name of the longest state/Province is 56 letters
                pattern: {
                  value: /^[A-Za-z\s.'-]+$/,
                  message: "Only letters, spaces, and basic punctuation allowed"
                }
              }}
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
                pattern: {
                  value: /^[A-Za-z0-9][A-Za-z0-9\s-]{2,9}[A-Za-z0-9]$/,
                  message: "Enter a valid postal code"
                }
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
              validation={{
                pattern: {
                  value: /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[A-Za-z0-9\-_%]+\/?$/,
                  message: "Enter a valid LinkedIn profile URL"
                }
              }}
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
              validation={{
                required: "Last name is required",
                maxLength: { value: 50, message: "Must be under 50 characters" },
                pattern: {
                  value: /^[\p{L}\s'-]+$/u,
                  message: "Only letters, spaces, hyphens, and apostrophes allowed"
                }
              }}>
            </TextEntry>
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
                minLength: { value: 2, message: "Must be at least 2 characters" },
                maxLength: { value: 100, message: "Must be under 100 characters" },
                pattern: {
                  value: /^[\p{L}0-9\s.,'&/()-]+$/u,
                  message: "Contains invalid characters"
                }
              }} // Allows characters like ampersand, and unicode letters so that non english organisations are also accepted.
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
              validation={{
                maxLength: { value: 58, message: "Must be under 58 characters" },
                pattern: {
                  value: /^[\p{L}\s.'-]+$/u,
                  message: "Only letters, spaces, and basic punctuation allowed"
                }
              }}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Country:" ></FormLabel>
            <TextEntry
              item='country'
              placeholder='Country'
              register={methods.register}
              formState={methods.formState}
              validation={{
                maxLength: { value: 56, message: "Must be under 56 characters" },
                pattern: {
                  value: /^[\p{L}\s.'-]+$/u,
                  message: "Only letters, spaces, and basic punctuation allowed"
                }
              }}
            ></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Github Link:" ></FormLabel>
            <TextEntry
              item='github'
              placeholder='Paste link here'
              register={methods.register}
              formState={methods.formState}
              validation={{
                pattern: {
                  value: /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})\/?$/,
                  message: "Enter a valid GitHub profile URL"
                }
              }}
            ></TextEntry>
          </FormSubDiv>
        </FormDiv>
      </ObjectContainer>
    </MainForm>
  )
}

export default PersonalDetails