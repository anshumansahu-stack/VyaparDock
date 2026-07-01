import React from 'react'
import Hero from './Hero'
import MainContent from './MainContent/MainContent'
import SecondaryContent from './SecondaryContent/SecondaryContent'
import Ender from './Ender'
const Home = () => {
  return (
    <div style={{background: 'linear-gradient(to left, #2c5364, #203a43, #0f2027)'}} className='flex flex-col justify-end items-center gap-2'>
      <Hero></Hero>
      <MainContent></MainContent>
      <SecondaryContent></SecondaryContent>
      <Ender></Ender>
    </div>
  )
}

export default Home