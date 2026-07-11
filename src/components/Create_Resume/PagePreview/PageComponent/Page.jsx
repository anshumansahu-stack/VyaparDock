import React from 'react'
import Header from './Header/Header'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'

const Page = () => {
  return (
    <div className="w-full h-135.75 no-scrollbar overflow-hidden overflow-y-scroll relative print:h-auto print:overflow-visible print:p-0">
      <div className="w-198.5 h-280.75 origin-top-left scale-[0.52] bg-white absolute left-8.5 top-2.5 p-5 flex flex-col gap-3">
        <Header />
        <Education/>
        <Experience/>
        <Projects/>
      </div>
    </div>
  )
}

export default Page
