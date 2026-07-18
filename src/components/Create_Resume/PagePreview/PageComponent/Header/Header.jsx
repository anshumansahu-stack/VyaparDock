import React from 'react'
import Name from './HeaderComponents/Name'
import Phone from './HeaderComponents/Phone'
import Altphone from './HeaderComponents/Altphone'
import Email from './HeaderComponents/Email'
import Address from './HeaderComponents/Address'
import Github from './HeaderComponents/Github'
import Linkedin from './HeaderComponents/Linkedin'
import ColumnContainer from './HeaderContainers/ColumnContainer'
import Role from './HeaderComponents/Role'
import Organisation from './HeaderComponents/Organisation'

const Header = () => {
    return (
        <div className='flex justify-between w-full min-h-[15cqw] break-inside-avoid'>
            <ColumnContainer className='items-start'>
                <Name className='justify-start'/>
                <Role className='justify-start'/>
                <Organisation className='justify-start'/>
            </ColumnContainer>
            <ColumnContainer className='items-end'>
                <Phone className='justify-end'></Phone>
                <Altphone className='justify-end'/>
                <Email className='justify-end'/>
                <Address className='justify-end'/>
                <div className="flex justify-around gap-[2cqw] text-xs mt-1">
                    <Github className='justify-end'/>
                    <Linkedin className='justify-end'/>
                </div>
            </ColumnContainer>
        </div>
    )
}

export default Header