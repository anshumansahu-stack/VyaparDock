import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../DataContext'
import Header from './Header/Header'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import TechnicalSkills from './TechnicalSkills/TechnicalSkills'
import PositionsOfResponsibility from './PositionsOfResponsibility/PositionsOfResponsibility'
import Achievements from './Achievements/Achievements'

const Page = (props) => {
  const { isPrinting } = useContext(DataContext)
  return (
    <div className={`@container papertoprint w-full min-h-[80%] no-scrollbar overflow-hidden overflow-y-scroll p-5 flex flex-col bg-white origin-top-left ${isPrinting?'pt-0 ':''} ${props.className || ''}`}>
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
