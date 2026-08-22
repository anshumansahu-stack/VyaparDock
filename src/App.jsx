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
import Projects from './components/Create_Resume/FormEntry/FEComponents/OutletComps/Projects';
import TechnicalSkills from './components/Create_Resume/FormEntry/FEComponents/OutletComps/TechnicalSkills';
import PositionsOfResponsibility from './components/Create_Resume/FormEntry/FEComponents/OutletComps/PositionsOfResponsibility';
import AchievementsAndCertifications from './components/Create_Resume/FormEntry/FEComponents/OutletComps/AchievementsAndCertifications';
import Page from './components/Create_Resume/PagePreview/PageComponent/Page';
import ResumeOMeter from './components/Resume_o_meter/ResumeOMeter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    children: [
      {
        path: 'personal_details',
        element:
          <PersonalDetails />
      },
      {
        path: 'education',
        element:
          <Education />
      },
      {
        path: 'professional_experience',
        element:
          <ProfessionalExperience />
      },
      {
        path: 'technical_skills',
        element:
          <TechnicalSkills />
      },
      {
        path: 'projects',
        element:
          <Projects />
      },
      {
        path: 'positions_of_responsibility',
        element:
          <PositionsOfResponsibility />
      },
      {
        path: 'achievements_and_certifications',
        element:
          <AchievementsAndCertifications />
      },
      {
        path: 'view_form',
        element:
          <Page />
      }
    ]
  },
  {
    path: '/resume_o_meter',
    element:
      <UniversalWrapper>
        <Navbar />
        <ResumeOMeter />
      </UniversalWrapper>
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
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="!bg-moonwalker !text-white !rounded-2xl !border !border-gray-800 !font-[Braah_One] !text-[2.2vh] shadow-xl"
      /></>
  )
}

export default App
