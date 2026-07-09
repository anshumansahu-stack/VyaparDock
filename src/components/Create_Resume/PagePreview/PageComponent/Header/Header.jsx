import React from 'react'
import Name from './HeaderComponents/Name'
import Phone from './HeaderComponents/Phone'
import Altphone from './HeaderComponents/Altphone'
import Email from './HeaderComponents/Email'
import Address from './HeaderComponents/Address'
import Github from './HeaderComponents/Github'
import Linkedin from './HeaderComponents/Linkedin'

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
                <div className='flex items-start justify-end'>
                    <Github className='min-w-40!'></Github>
                    <Linkedin className='min-w-40!'></Linkedin>
                </div>
            </div>
        </div>
    )
}

export default Header