import React from 'react'
import { AiOutlineUser } from "react-icons/ai";

export default function PersonalHeader() {
    return (
        <div className="flex items-center">
            <span className='mr-2 text-xl py-2'>Personal</span>
            <AiOutlineUser className='text-xl' />
        </div>
    )
}
