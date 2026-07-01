import React from 'react'
import { useForm, FormProvider } from "react-hook-form"
import FormLabel from '../FormElements/FormLabel'
import TextEntry from '../FormElements/TextEntry'
import FormDiv from '../FormElements/FormDiv'
import FormSubDiv from '../FormElements/FormSubDiv'
const PersonalDetails = () => {
  const methods = useForm()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods

  const onSubmit = (data) => console.log(data)

  return (
    <FormProvider {...methods}>
      <form className="bg-personal-details w-full h-4/5 p-5 flex justify-between gap-5 px-20 py-10 overflow-y-scroll scrollbar-hide" onSubmit={handleSubmit(onSubmit)}>
        <FormDiv>
          <FormSubDiv>
            <FormLabel label="First name:"></FormLabel>
            <TextEntry item='firstname' placeholder='Enter First Name' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Job target:"></FormLabel>
            <TextEntry item='jobtarget' placeholder='Enter Job Target' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Email:"></FormLabel>
            <TextEntry item='email' placeholder='abc@dmail.com' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv className='w-90'>
            <FormLabel label="Address Line 1:" className='w-150'></FormLabel>
            <TextEntry item='address1' placeholder='Cake House' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv className='w-90'>
            <FormLabel label="Address Line 3:" className='w-150'></FormLabel>
            <TextEntry item='address3' placeholder='State of excitement' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv className='w-90'>
            <FormLabel label="State:" className='w-150'></FormLabel>
            <TextEntry item='state' placeholder='State' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv className='w-90'>
            <FormLabel label="Postal Code:" className='w-150'></FormLabel>
            <TextEntry item='postalcode' placeholder='654321' register={register}></TextEntry>
          </FormSubDiv>
        </FormDiv>
        <FormDiv>
          <FormSubDiv>
            <FormLabel label="Last name:"></FormLabel>
            <TextEntry item='lastname' placeholder='Enter Last Name' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv>
            {/* Empty */}
          </FormSubDiv>
          <FormSubDiv>
            <FormLabel label="Phone:"></FormLabel>
            <TextEntry item='phone' placeholder='+91-1234567890' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv className='w-90'>
            <FormLabel label="Address Line 2:" className='w-150'></FormLabel>
            <TextEntry item='address2' placeholder='Bakers Street' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv className='w-90'>
            <FormLabel label="City:" className='w-150'></FormLabel>
            <TextEntry item='city' placeholder='City' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv className='w-90'>
            <FormLabel label="Country:" className='w-150'></FormLabel>
            <TextEntry item='country' placeholder='Country' register={register}></TextEntry>
          </FormSubDiv>
          <FormSubDiv className='w-90'>
            <FormLabel label="Date of Birth:" className='w-150'></FormLabel>
            <TextEntry item='dob' placeholder='dd-mm-yyyy' register={register}></TextEntry>
          </FormSubDiv>
        </FormDiv>
      </form>
    </FormProvider>
  )
}

export default PersonalDetails