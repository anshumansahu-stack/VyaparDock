import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent/MainContent'
import SecondaryContent from './components/SecondaryContent/SecondaryContent'
import Ender from './components/Ender'

function App() {

  return (
    <div style={{background: 'linear-gradient(to left, #2c5364, #203a43, #0f2027)'}} className='flex flex-col items-center gap-2'>
      <Navbar></Navbar>
      <Hero></Hero>
      <MainContent></MainContent>
      <SecondaryContent></SecondaryContent>
      <Ender></Ender>
    </div>
  )
}

export default App
