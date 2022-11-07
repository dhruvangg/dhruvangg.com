import React from 'react'
import { MdWorkOutline } from "react-icons/md"
export default function WorkHeader() {
    return (
        <div className="flex items-center">
            <span className='mr-2 text-xl py-2'>Work</span>
            <MdWorkOutline className='text-xl' />
        </div>
    )
}
