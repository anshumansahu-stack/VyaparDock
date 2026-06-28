import './App.css'
import Home from './components/Home/Home';
import Navbar from './components/Navbar'
import CreateResume from './components/Create_Resume/CreateResume';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:
    <div style={{background: 'linear-gradient(to left, #2c5364, #203a43, #0f2027)'}} className='flex flex-col items-center'>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  },
  {
    path:"/create_resume",
    element:
    <div style={{background: 'linear-gradient(to left, #2c5364, #203a43, #0f2027)'}} className='flex flex-col items-center'>
      <Navbar></Navbar>
      <CreateResume></CreateResume>
    </div>
  },
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
