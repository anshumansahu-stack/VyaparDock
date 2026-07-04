import React, { useContext } from 'react'
import FormLabel from '../../FormElements/FormLabel'
import TextEntry from '../../FormElements/TextEntry'
import FormDiv from '../../FormElements/FormDiv'
import FormSubDiv from '../../FormElements/FormSubDiv'
import MainForm from '../../FormElements/MainForm'
import FormTitle from '../../FormElements/FormTitle'
import DateEntry from '../../FormElements/DateEntry'
import { DataContext } from '../../DataContext'

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
              <FormLabel label="Phone:"></FormLabel>
              <TextEntry item='phone' placeholder='+91-1234567890' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Email:"></FormLabel>
              <TextEntry item='email' placeholder='abc@dmail.com' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="LinkedIn:" ></FormLabel>
              <TextEntry item='linkedin' placeholder='linkedin.com/' register={methods.register}></TextEntry>
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
              <FormLabel label="Alt. Phone:"> </FormLabel>
              <TextEntry item='altphone' placeholder='+91-0987654321' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Github Link:" ></FormLabel>
              <TextEntry item='github' placeholder='github.com/' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="City:" ></FormLabel>
              <TextEntry item='city' placeholder='City' register={methods.register}></TextEntry>
            </FormSubDiv>
            <FormSubDiv>
              <FormLabel label="Country:" ></FormLabel>
              <TextEntry item='country' placeholder='Country' register={methods.register}></TextEntry>
            </FormSubDiv>
          </FormDiv>
        </div>
      </MainForm>
  )
}

export default PersonalDetails