import React from 'react'
import JobTitle from './ExpBlock/JobTitle'
import Employer from './ExpBlock/Employer'
import JobDesc from './ExpBlock/JobDesc'
import DateBlock from './ExpBlock/DateBlock'
import AddressBlock from './ExpBlock/AddressBlock'

// Did not divide any further subcomponents here because each component rendered in the same level has unique configurations.
const ExpBlock = (props) => {
  return (
    <div className='flex flex-col w-full '>
      <div className='flex justify-between pt-2'>
        <div className='flex flex-col items-start justify-center'>
          <Employer exp={props.exp} />
          <JobTitle exp={props.exp} />
        </div>
        <div className='flex flex-col items-end justify-center'>
          <DateBlock exp={props.exp} />
          <AddressBlock exp={props.exp} />
        </div>
      </div>
      <JobDesc exp={props.exp} className='self-start' />
    </div>
  )
}

export default ExpBlock