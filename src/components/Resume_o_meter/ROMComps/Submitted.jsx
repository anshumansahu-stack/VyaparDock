import React from 'react'
import StatusState from './Submitted/StatusState'
import ResumeMeter from './Submitted/ResumeMeter'
import CTA2 from '../../buttons/CTA2'
import ResumeDescription from './Submitted/ResumeDescription'
import MissingKeywords from './Submitted/MissingKeywords'
import MissingSkills from './Submitted/MissingSkills'
import ResumeSuggestion from './Submitted/ResumeSuggestion'


const Submitted = () => {
  return (
    <div className='flex flex-col items-center justify-around'>
      <StatusState />
      <div className='bg-blue-grad p-2.5 flex flex-col items-center justify-around h-full rounded-b-2xl'>
        <div className=' flex flex-wrap gap-6 justify-center items-center'>
          <ResumeMeter />
          <ResumeDescription />
        </div>
        <ResumeSuggestion />
        <MissingKeywords />
        <MissingSkills />
        <CTA2 name='Take me to Resume Builder →' path='/create_resume/personal_details' />
      </div>
    </div>
  )
}

export default Submitted