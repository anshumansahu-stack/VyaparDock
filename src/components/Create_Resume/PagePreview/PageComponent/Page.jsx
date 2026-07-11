import React from 'react'
import Header from './Header/Header'
import Education from './Education/Education'
import Experience from './Experience/Experience'

const Page = () => {
  return (
    <div className="w-130 h-135.75 overflow-hidden relative">
      <div className="w-198.5 h-280.75 origin-top-left scale-[0.52] bg-white absolute left-8.5 top-2.5 p-5 flex flex-col gap-3">
        <Header />
        <Education/>
        <Experience/>
      </div>
    </div>
  )
}

export default Page
