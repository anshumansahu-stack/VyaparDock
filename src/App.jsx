import './App.css'
import Home from './components/Home/Home';
import Navbar from './components/Navbar'
import CreateResume from './components/Create_Resume/CreateResume';
import UniversalWrapper from './components/UniversalWrapper';
import NotFound404 from './components/NotFound404';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PersonalDetails from './components/Create_Resume/FormEntry/FEComponents/PersonalDetails';
import ProfessionalExperience from './components/Create_Resume/FormEntry/FEComponents/ProfessionalExperience'
import Education from './components/Create_Resume/FormEntry/FEComponents/Education';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <UniversalWrapper>
        <Navbar></Navbar>
        <Home></Home>
      </UniversalWrapper>
  },
  {
    path: "/create_resume",
    element:
      <UniversalWrapper>
        <Navbar></Navbar>
        <CreateResume></CreateResume>
      </UniversalWrapper>,
    children:[
      {
        path:'personal_details',
        element:
        <PersonalDetails/>
      },
      {
        path:'education',
        element:
        <Education/>
      },
      {
        path:'professional_experience',
        element:
        <ProfessionalExperience/>
      }
    ]
  },
  {
    path: "/*",
    element:
    <UniversalWrapper>
      <Navbar></Navbar>
      <NotFound404></NotFound404>
    </UniversalWrapper>
  },
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
