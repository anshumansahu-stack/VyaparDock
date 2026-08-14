import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from "react-hook-form"
import { useLocation } from 'react-router'
import FormEntry from './FormEntry/FormEntry'
import PagePreview from './PagePreview/PagePreview'
import { DataContext } from './DataContext'
import html2pdf from 'html2pdf.js'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
// Components:
//One div containing Live resume score and form
// Another div containing page Preview

const CreateResume = () => {
  const FORM_STEPS = ['personal_details', 'education', 'professional_experience', 'projects', 'technical_skills', 'positions_of_responsibility', 'achievements_and_certifications', 'view_form']

  const [Data, setData] = useState({}) // These will be passed down as context.

  const getCachedData = async () => {
    try {
      const saved = localStorage.getItem('vyapardock_resume_cache')
      const parsedData = saved ? JSON.parse(saved) : {}
      if (parsedData != {}) {
        const loadConfirmation=await Swal.fire({
          title: "<strong>Hey, Ive got somethin!</strong>",
          text: "Load Previous Resume progress save?",
          color: 'white',
          customClass: {
            popup: 'bg-moonwalker'
          },
          icon: "question",
          showCancelButton: true,
          confirmButtonText: `
    <b>⟵ Load Form</b>
  `,
          cancelButtonText: `
    <b> Start new ⟶</b>
  `,
        });
        if(!loadConfirmation.isConfirmed){
          return {}
        }
        else{
          return parsedData
        }
      }
      return parsedData
    } catch (e) {
      console.error("Cache parsing anomaly, falling back to empty:", e)
      return {}
    }
  } // For local reloads, globally backend is required

  const handleResetAllData = () => {
    //  Wipe out background browser memory storage
    localStorage.removeItem('vyapardock_resume_cache');

    // Clear out the live React Hook Form state memory cache. 
    // Passing an empty object {} clears out every array matrix, checkbox, and text field instantly
    methods.reset({
      firstname: '',
      lastname: '',
      currRole: '',
      currOrg: '',
      phone: '',
      altphone: '',
      email: '',
      github: '',
      linkedin: '',
      city: '',
      state: '',
      country: '',
      postalcode: '',
      education: [],
      experiences: [],
      projects: [],
      technicalskills: [],
      responsibilities: [],
      achievementsandcertifications: []
    });

    // Reset the step index back to the beginning page
    setCurrentIndex(0);
  };

  const handleResetCurrentPage = () => {
    const currentStepName = FORM_STEPS[currentIndex];
    if (!currentStepName) return;

    const confirmClear = window.confirm(`Are you sure you want to clear all inputs on this page?`);
    if (!confirmClear) return;

    const updatedData = { ...methods.getValues() };

    if (currentStepName === 'personal_details') {
      const personalKeys = ['firstname', 'lastname', 'currRole', 'currOrg', 'phone', 'altphone', 'email', 'github', 'linkedin', 'city', 'state', 'country', 'postalcode'];
      personalKeys.forEach(key => updatedData[key] = '');
    } else {
      const stepToDataKey = {
        'education': 'education',
        'professional_experience': 'experiences',
        'projects': 'projects',
        'technical_skills': 'technicalskills',
        'positions_of_responsibility': 'responsibilities',
        'achievements_and_certifications': 'achievementsandcertifications'
      };

      const dataKey = stepToDataKey[currentStepName];
      if (dataKey) {
        updatedData[dataKey] = []; // Clear the array
      }
    }

    // Force React Hook Form to update
    methods.reset(updatedData);

    // Sync to local storage
    localStorage.setItem('vyapardock_resume_cache', JSON.stringify(updatedData));
  };

  const methods = useForm({
    defaultValues: getCachedData(),
    mode: 'onChange'
  })// Default values loaded from recent cached data

  const liveData = methods.watch() //This will watch the livedata of the form

  useEffect(() => {
    // Only save if there is actually data populated to prevent overwriting with nothing
    if (Object.keys(liveData).length > 0) {
      localStorage.setItem('vyapardock_resume_cache', JSON.stringify(liveData))
    }
  }, [liveData]) // As a side effect of change the data will be written locally onto cache

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields }, // added touchedFields to prevent new field addition error
    clearErrors
  } = methods


  const [currentIndex, setCurrentIndex] = useState(0)

  const onSubmit = (EnteredData) => {
    setData(EnteredData)
    console.log("Final payload dispatched:", EnteredData)
    localStorage.removeItem('vyapardock_resume_cache')
  }

  const location = useLocation()
  const isLastIndex = location.pathname.endsWith('/view_form')

  const [isPrinting, setIsPrinting] = useState(false)

  const downloadResume = async () => {
    const element = document.querySelector('.papertoprint');
    if (!element) return;

    element.scrollTop = 0;

    setIsPrinting(true);

    const config = {
      margin: [5, 0, 0, 0],
      filename: 'my_resume.pdf',
      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 794
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'css' }
    };

    // Give React 300ms to strip the scroll bars and lay out the document flat in the DOM
    await new Promise(r => setTimeout(r, 100));

    html2pdf().set(config).from(element).save().then(() => {
      setIsPrinting(false);
    });
  };

  const completeFormValidation = async () => {
    const fieldsToValidate = [
      'firstname', 'lastname', 'phone', 'email',
      'education', 'experiences', 'projects',
      'technicalskills', 'responsibilities', 'achievementsandcertifications'
    ];

    await methods.trigger(fieldsToValidate);// complete trigger

    const activeErrors = methods.formState.errors;// find errors

    const personalValidationFields = ['firstname', 'lastname', 'phone', 'email']// Check this whenever you create a new field

    const dataKeyToPageName = {
      'firstname': 'Personal Details',
      'lastname': 'Personal Details',
      'phone': 'Personal Details',
      'email': 'Personal Details',
      'education': 'Education',
      'experiences': 'Professional Experience',
      'projects': 'Projects',
      'technicalskills': 'Technical Skills',
      'responsibilities': 'Positions of Responsibility',
      'achievementsandcertifications': 'Achievements and Certifications'
    };

    const brokenPages = new Set(); // Set data structure to prevent duplicates like multiple errors in personal details

    fieldsToValidate.forEach(key => {
      // Standard React Hook Form validation errors registered by the DOM
      console.log('key', key)
      if (activeErrors && activeErrors[key]) {
        const pageName = dataKeyToPageName[key];
        if (pageName) brokenPages.add(pageName);
      }

      // Deep Content check for un-rendered, blank, or ghost array data entries
      const rawValue = methods.getValues(key);
      console.log('rawValue payload:', rawValue)
      if (Array.isArray(rawValue)) { //checks whether the rawValue is an array or not, using Array object in javascript
        rawValue.forEach(item => {
          if (item && typeof item === 'object') {

            if (key === 'education') {
              const isOrgBlank = !item.organisation || (typeof item.organisation === 'string' && !item.organisation.trim());
              const isstDBlank = !item.startDate || (typeof item.startDate === 'string' && !item.startDate.trim());
              const isStudyBoardBlank = !item.studyboard || (typeof item.studyboard === 'string' && !item.studyboard.trim());
              const isDegreeBlank = !item.degree || (typeof item.degree === 'string' && !item.degree.trim());
              const isendDateBlank = !item.endDate || (typeof item.endDate === 'string' && !item.endDate.trim());
              const iscgpaBlank = !item.cgpa || (typeof item.cgpa === 'string' && !item.cgpa.trim());

              if (isOrgBlank || isstDBlank || isStudyBoardBlank || isDegreeBlank || isendDateBlank || iscgpaBlank) {
                brokenPages.add(dataKeyToPageName[key]);
              }
            }

            if (key === 'experiences') {
              const isJobTitleBlank = !item.jobtitle || (typeof item.jobtitle === 'string' && !item.jobtitle.trim());
              const isStartDateBlank = !item.startDate || (typeof item.startDate === 'string' && !item.startDate.trim());
              const isJobStateBlank = !item.jobstate || (typeof item.jobstate === 'string' && !item.jobstate.trim());
              const isEmployerBlank = !item.employer || (typeof item.employer === 'string' && !item.employer.trim());
              const isEndDateBlank = !item.endDate || (typeof item.endDate === 'string' && !item.endDate.trim());
              const isJobCityBlank = !item.jobcity || (typeof item.jobcity === 'string' && !item.jobcity.trim());
              const isJobDescBlank = !item.jobdescription || (typeof item.jobdescription === 'string' && !item.jobdescription.trim());

              if (isJobTitleBlank || isStartDateBlank || isJobStateBlank || isEmployerBlank || isEndDateBlank || isJobCityBlank || isJobDescBlank) {
                brokenPages.add(dataKeyToPageName[key]);
              }
            }

            if (key === 'projects') {
              const isProjTitleBlank = !item.projecttitle || (typeof item.projecttitle === 'string' && !item.projecttitle.trim());
              const isStartDateBlank = !item.startDate || (typeof item.startDate === 'string' && !item.startDate.trim());
              const isEndDateBlank = !item.endDate || (typeof item.endDate === 'string' && !item.endDate.trim());
              const isProjDescBlank = !item.projectdescription || (typeof item.projectdescription === 'string' && !item.projectdescription.trim());
              const isSkillStackEmpty = !item.skillstack || item.skillstack.length === 0;

              if (isProjTitleBlank || isStartDateBlank || isEndDateBlank || isProjDescBlank || isSkillStackEmpty) {
                brokenPages.add(dataKeyToPageName[key]);
              }
            }

            if (key === 'technicalskills') {
              const isCategoryBlank = !item.category || (typeof item.category === 'string' && !item.category.trim());
              const isSkillListEmpty = !item.skillList || item.skillList.length === 0;
              if (isCategoryBlank || isSkillListEmpty) {
                brokenPages.add(dataKeyToPageName[key]);
              }
            }

            if (key === 'responsibilities') {
              const isPositionBlank = !item.position || (typeof item.position === 'string' && !item.position.trim());
              const isStartDateBlank = !item.startDate || (typeof item.startDate === 'string' && !item.startDate.trim());
              const isOrganisationBlank = !item.organisation || (typeof item.organisation === 'string' && !item.organisation.trim());
              const isEndDateBlank = !item.endDate || (typeof item.endDate === 'string' && !item.endDate.trim());
              const isPosDescBlank = !item.posdescription || (typeof item.posdescription === 'string' && !item.posdescription.trim());

              if (isPositionBlank || isStartDateBlank || isOrganisationBlank || isEndDateBlank || isPosDescBlank) {
                brokenPages.add(dataKeyToPageName[key]);
              }
            }

            if (key === 'achievementsandcertifications') {
              const isAchTitleBlank = !item.achtitle || (typeof item.achtitle === 'string' && !item.achtitle.trim());
              const isAchDescBlank = !item.achdesc || (typeof item.achdesc === 'string' && !item.achdesc.trim());

              if (isAchTitleBlank || isAchDescBlank) {
                brokenPages.add(dataKeyToPageName[key]);
              }
            }

          }
        });
      }
      if (typeof rawValue === 'string') {
        if (personalValidationFields.indexOf(key) != -1) {
          const isPFFieldBlank = !rawValue || (typeof rawValue === 'string' && !rawValue.trim());
          if (isPFFieldBlank) {
            brokenPages.add(dataKeyToPageName[key])
          }
        }
      }
      console.log('brokenpages:', brokenPages)
    });

    const invalidPagesList = Array.from(brokenPages);

    if (invalidPagesList.length === 0) {
      return true;
    } else {
      return invalidPagesList;
    }
  };
  return (
    <DataContext.Provider value={{
      Data,
      setData,
      liveData,
      methods,
      onSubmit,
      currentIndex,
      setCurrentIndex,
      FORM_STEPS,
      totalSteps: FORM_STEPS.length,
      handleResetAllData,
      handleResetCurrentPage,
      isPrinting,
      setIsPrinting,
      downloadResume,
      completeFormValidation
    }}>
      <div style={{ background: 'linear-gradient(to left, #2c5364, #203a43, #0f2027)' }} className={"w-full box-border flex justify-center items-start my-[5vh] gap-[2.75%] " + (!isLastIndex ? 'h-[80%] ' : 'h-full ')}>
        <FormEntry></FormEntry>
        <PagePreview></PagePreview>
      </div>
    </DataContext.Provider>
  )
}

export default CreateResume