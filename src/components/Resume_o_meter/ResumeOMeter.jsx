import React, { useState } from 'react'
import {ROMContext} from './ROMContext'
import Column from './ROMComps/Column'
import WelcomeText from './ROMComps/WelcomeText'
import TextAreaEntry from './ROMComps/InputFields/TextAreaEntry'
import FileEntry from './ROMComps/InputFields/FileEntry'
import NotSubmitted from './ROMComps/NotSubmitted'
import AboutText from './ROMComps/AboutText'
import TitleText from './ROMComps/TitleText'
import Submitted from './ROMComps/Submitted'


const ResumeOMeter = () => {
  const [submitted, setSubmitted] = useState(true)
  const [processing, setProcessing] = useState(false)
  let obtainedScore = 5;
  return (
    <ROMContext.Provider value={{
      processing,
      setProcessing,
      obtainedScore
    }}>
      <div className='h-[89.5%] w-full flex gap-5 p-5'>
        <Column className='flex flex-col gap-5 overflow-y-scroll no-scrollbar'>
          <div className='flex flex-col w-full gap-10 items-start justify-center'>
            <TitleText />
            <WelcomeText />
            <AboutText />
          </div>
          <div className='flex flex-col gap-5 justify-around w-full min-h-[70%]'>
            <FileEntry className='min-h-[45%]' />
            <TextAreaEntry placeholder='Paste your job description here...' className='w-full min-h-[45%]' id='jobDescription' />
          </div>
        </Column>
        <Column className=' flex justify-center'>
          {submitted ? <Submitted /> : <NotSubmitted />}
        </Column>
      </div>
    </ROMContext.Provider>
  )
}

export default ResumeOMeter