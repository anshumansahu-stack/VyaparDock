import React, { useContext } from 'react'
import FormLabel from '../FormElements/FormLabel'
import TextEntry from '../FormElements/TextEntry'
import FormDiv from '../FormElements/FormDiv'
import FormSubDiv from '../FormElements/FormSubDiv'
import MainForm from '../FormElements/MainForm'
import FormTitle from '../FormElements/FormTitle'
import DateEntry from '../FormElements/DateEntry'
import SubmitButton from '../FormElements/SubmitButton'
import { DataContext } from './DataContext'

const PersonalDetails = () => {
  const {Data, setData, liveData, methods, onSubmit, }=useContext(DataContext)

  return (
      <MainForm onSubmit={methods.handleSubmit(onSubmit)}> 
      {/* //FormProvider is imported here itself */}
        <FormTitle title="Personal Details"></FormTitle>
        <div className='flex justify-between gap-15'>
          <FormDiv>
            <FormSubDiv>
              <FormLabel label="First name:"></FormLabel>
              <TextEntry item='firstname' placeholder='Enter First Name' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Job target:"></FormLabel>
              <TextEntry item='jobtarget' placeholder='Enter Job Target' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Email:"></FormLabel>
              <TextEntry item='email' placeholder='abc@dmail.com' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Address Line 1:" ></FormLabel>
              <TextEntry item='address1' placeholder='Cake House' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Address Line 3:" ></FormLabel>
              <TextEntry item='address3' placeholder='State of excitement' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="State:" ></FormLabel>
              <TextEntry item='state' placeholder='State' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Postal Code:"></FormLabel>
              <TextEntry item='postalcode' placeholder='654321' register={methods.register}></TextEntry>
            </FormSubDiv>
          </FormDiv>
          <FormDiv>
            <FormSubDiv>
              <FormLabel label="Last name:"></FormLabel>
              <TextEntry item='lastname' placeholder='Enter Last Name' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              {/* Empty */}
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Phone:"></FormLabel>
              <TextEntry item='phone' placeholder='+91-1234567890' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Address Line 2:"> </FormLabel>
              <TextEntry item='address2' placeholder='Bakers Street' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="City:" ></FormLabel>
              <TextEntry item='city' placeholder='City' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Country:" ></FormLabel>
              <TextEntry item='country' placeholder='Country' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Date of Birth:" ></FormLabel>
              <DateEntry item='dob' placeholder='dd-mm-yyyy' register={methods.register}></DateEntry>
            </FormSubDiv>
          </FormDiv>
        </div>
        <SubmitButton></SubmitButton>
      </MainForm>
  )
}

export default PersonalDetails