import React from 'react'
import Header from './Header/Header'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import TechnicalSkills from './TechnicalSkills/TechnicalSkills'
import PositionsOfResponsibility from './PositionsOfResponsibility/PositionsOfResponsibility'
import Achievements from './Achievements/Achievements'

const Page = (props) => {
  return (
    <div className={`@container papertoprint w-full no-scrollbar print:overflow-visible print:scale-100 print:origin-top-left print:h-full print:w-full overflow-hidden overflow-y-scroll p-5 flex flex-col bg-white origin-top-left ` + props.className}>
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
