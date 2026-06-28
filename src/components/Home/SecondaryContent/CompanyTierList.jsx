import React, { useState } from 'react'
import CTA1 from '../../buttons/CTA1'
import accentureBG from '../../../assets/Top_Hiring_Companies/accenture.jpg'
import deloitteBG from '../../../assets/Top_Hiring_Companies/deloitte.jpg'
import goldmansachsBG from '../../../assets/Top_Hiring_Companies/goldman_sachs.jpg'
import googleBG from '../../../assets/Top_Hiring_Companies/google.jpg'
import oracleBG from '../../../assets/Top_Hiring_Companies/oracle.jpg'
import { useEffect } from 'react'

const CompanyTierList = () => {
  let picArray = [accentureBG, deloitteBG, goldmansachsBG, googleBG, oracleBG];
  const [index, setIndex] = useState(0);
  let max = picArray.length;
  let currBack = picArray[index];
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev=>(prev+1)%max);
      // Prev is defined on the spot. 'prev' can be any name. setInterval() and clearInterval() are react's Inbuilt functions.
      // Updating the state automatically updates the index variable, as it is a state and the currBack is derived from the same.
    }, 5000)
    return () => clearInterval(timer) // cleanup
  }, []) // separate transition properties are applied on the outermost styling properties so that there is a smooth transition. Ctrl+F for more.

  return (
    <div style={{ backgroundImage: `url(${currBack})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 1s ease-in-out'}} className=' flex flex-col justify-center items-center gap-5 h-full w-4/5 rounded-[15px]'>
      <p style={{ textShadow: '4px 4px 4px black' }} className='text-[70px] font-bold text-center text-white font-[Lobster_Two]'>Having a hard time Looking for jobs?</p>
      <CTA1 className=" w-210! text-[24px]" name='Check out Top Hiring Companies in your Skill Domain →'></CTA1>
    </div>
  )
}

export default CompanyTierList
