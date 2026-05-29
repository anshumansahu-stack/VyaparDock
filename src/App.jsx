import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent/MainContent'
import SecondaryContent from './components/SecondaryContent/SecondaryContent'
import Ender from './components/Ender'

function App() {

  return (
    <div style={{background: 'linear-gradient(135deg,rgba(2, 0, 36, 1) 0%, rgba(8, 8, 153, 1) 47%, rgba(2, 142, 163, 1) 100%)'}}className=' flex flex-col items-center gap-2'>
      <Navbar></Navbar>
      <Hero></Hero>
      <MainContent></MainContent>
      <SecondaryContent></SecondaryContent>
      <Ender></Ender>
    </div>
  )
}

export default App
