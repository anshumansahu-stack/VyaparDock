import React from 'react'
import Jobupdates from './Jobupdates'
import Social_media from './Social_media'
import CreateResume from './CreateResume'

const MainContent = () => {
  return (
    <div className="w-full h-100 bg-green-500 flex justify-between p-3 gap-3">
        <Jobupdates></Jobupdates>
        <div className=" flex flex-col justify-center items-center gap-5 w-2/5 ">
          <Social_media></Social_media>
          <CreateResume></CreateResume>
        </div>
    </div>
  )
}

export default MainContent
