import React from 'react'
import { FormProvider } from 'react-hook-form'
const MainForm = (props) => {
  return (
    <FormProvider {...props.methods}>
      <form className="bg-personal-details w-full h-4/5 p-5 flex flex-col justify-start items-center gap-5 px-20 py-5 overflow-y-scroll scrollbar-hide" onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </FormProvider>
  )
}

export default MainForm