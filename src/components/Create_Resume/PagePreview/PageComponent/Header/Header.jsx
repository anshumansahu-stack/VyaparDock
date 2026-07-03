import React from 'react'
import Name from './Name'
import Phone from './Phone'
import Altphone from './Altphone'
import Email from './Email'
import Address from './Address'
import Github from './Github'
import Linkedin from './Linkedin'

const Header = () => {
    return (
        <div className='flex justify-between w-full'>
            <div className='min-h-15 min-w-15'>
                <Name></Name>
            </div>
            <div className='min-h-15 min-w-15'>
                <Phone className=''></Phone>
                <Altphone></Altphone>
                <Email></Email>
                <Address></Address>
                <div className='flex items-start justify-center'>
                    <Github className='min-w-18.5!'></Github>
                    <Linkedin className='min-w-18.5!'></Linkedin>
                </div>
            </div>
        </div>
    )
}

export default Header