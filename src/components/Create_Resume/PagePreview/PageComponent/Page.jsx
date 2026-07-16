import React from 'react'
import { useLocation } from 'react-router'
import Header from './Header/Header'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import TechnicalSkills from './TechnicalSkills/TechnicalSkills'
import PositionsOfResponsibility from './PositionsOfResponsibility/PositionsOfResponsibility'
import Achievements from './Achievements/Achievements'

const Page = (props) => {
  const location=useLocation()
  const isLastIndex=location.pathname.endsWith('/view_form')
  return (
    <div className={`papertoprint w-198.5 h-280.75 no-scrollbar print:min-h-0 print:h-fit print:overflow-visible overflow-hidden overflow-y-scroll print:p-0 p-5 flex flex-col gap-3 bg-white origin-top-left print:scale-100 print:origin-top-left ${!isLastIndex? 'absolute left-8.5 top-10 scale-[0.52]' :''}`}>
      <Header />
      <Education />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <PositionsOfResponsibility />
      <Achievements />
    </div>
  )
}

export default Page
