import React from 'react'
import CompanyTierList from './CompanyTierList'
import BOOMAI from './BOOMAI'

const SecondaryContent = () => {
  return (
    <div className="w-full h-50 bg-yellow-500 flex justify-between p-3">
        <CompanyTierList></CompanyTierList>
        <BOOMAI></BOOMAI>
    </div>
  )
}

export default SecondaryContent
