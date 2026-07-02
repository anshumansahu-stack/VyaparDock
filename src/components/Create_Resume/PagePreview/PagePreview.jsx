import React from 'react'
import Page from './PageComponent/Page'

const PagePreview = () => {
  return (
    <div className="w-1/3 min-h-full flex flex-col justify-center items-center gap-3 font-[Braah_One] text-[30px] text-white">
        Preview:
        <Page></Page>
    </div>
  )
}

export default PagePreview