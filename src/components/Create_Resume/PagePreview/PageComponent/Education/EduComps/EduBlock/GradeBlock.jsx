import React, {useContext} from 'react'
import { DataContext } from '../../../../../DataContext'
import EduDummyContainer from '../EduContainers/EduDummyContainer'

const GradeBlock = () => {
    const {liveData}=useContext(DataContext)
    const educationList = liveData?.education || [] // If theres any livedata then extract the education list
  return (
    <>
      {/* Map over the collection so every added block prints its organization name */}
      {educationList.map((edu, index) => {
        // Guard Check: Skip rendering if this specific row is empty
        if (!edu.cgpa) return (
            <EduDummyContainer/>
        );

        return (
          <div key={index} className='font-[Ibarra_Real_Nova] text-[20px] text-black'>
            CGPA: {edu.cgpa}
          </div>
        )
      })}
    </>
  )
}

export default GradeBlock