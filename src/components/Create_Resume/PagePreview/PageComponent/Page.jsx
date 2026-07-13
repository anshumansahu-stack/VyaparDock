import React from 'react'
import Header from './Header/Header'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import TechnicalSkills from './TechnicalSkills/TechnicalSkills'
import PositionsOfResponsibility from './PositionsOfResponsibility/PositionsOfResponsibility'
import Achievements from './Achievements/Achievements'

const Page = () => {
  return (
    <div className="w-198.5 h-280.75 no-scrollbar overflow-hidden overflow-y-scroll print:h-auto print:overflow-visible print:p-0 origin-top-left scale-[0.52] bg-white absolute left-8.5 top-10 p-5 flex flex-col gap-3">
        <Header />
        <Education/>
        <Experience/>
        <Projects/>
        <TechnicalSkills/>
        <PositionsOfResponsibility/>
        <Achievements/>
    </div>
  )
}

export default Page
