import React from 'react'
import CompanyTierList from './CompanyTierList'
import BOOMAI from './BOOMAI'

const SecondaryContent = () => {
  return (
    <div className="w-full h-50 bg-yellow-500 flex justify-center p-3 gap-5">
        <CompanyTierList></CompanyTierList>
        <BOOMAI></BOOMAI>
    </div>
  )
}

export default SecondaryContent
