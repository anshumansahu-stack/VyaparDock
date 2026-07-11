import './App.css'
import Home from './components/Home/Home';
import Navbar from './components/Navbar'
import CreateResume from './components/Create_Resume/CreateResume';
import UniversalWrapper from './components/UniversalWrapper';
import NotFound404 from './components/NotFound404';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PersonalDetails from './components/Create_Resume/FormEntry/FEComponents/OutletComps/PersonalDetails';
import ProfessionalExperience from './components/Create_Resume/FormEntry/FEComponents/OutletComps/ProfessionalExperience'
import Education from './components/Create_Resume/FormEntry/FEComponents/OutletComps/Education';
import AreasOfExpertise from './components/Create_Resume/FormEntry/FEComponents/OutletComps/AreasOfExpertise';
import Projects from './components/Create_Resume/FormEntry/FEComponents/OutletComps/Projects';
import TechnicalSkills from './components/Create_Resume/FormEntry/FEComponents/OutletComps/TechnicalSkills';
import PositionsOfResponsibility from './components/Create_Resume/FormEntry/FEComponents/OutletComps/PositionsOfResponsibility';
import AchievementsAndCertifications from './components/Create_Resume/FormEntry/FEComponents/OutletComps/AchievementsAndCertifications';

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
      },
      {
        path:'areas_of_expertise',
        element:
        <AreasOfExpertise/>
      },
      {
        path:'technical_skills',
        element:
        <TechnicalSkills/>
      },
      {
        path:'projects',
        element:
        <Projects/>
      },
      {
        path:'positions_of_responsibility',
        element:
        <PositionsOfResponsibility/>
      },
      {
        path:'achievements_and_certifications',
        element:
        <AchievementsAndCertifications/>
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
