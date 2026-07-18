import React from 'react'
import Page from './PageComponent/Page'
import { useLocation } from 'react-router'

const PagePreview = () => {
  const location=useLocation()

  if (location.pathname.endsWith('/view_form')) {
    return null;
  }
  return (
    <div className="flex flex-col justify-center w-[30%] h-full text-center gap-3 font-[Braah_One] text-[30px] text-white">
        Preview:
        <Page></Page>
    </div>
  )
}

export default PagePreview