import React from 'react'
import { ModeToggle } from './atoms/modeToggle'
import Link from 'next/link'
import { HiOutlineHome } from "react-icons/hi";

const Headers = () => {
  return (
    <div className='w-full border-b '>
        <div className='lg:max-w-6xl mx-auto p-5 flex justify-between'>
            <h1 className='text-2xl font-bold text-violet-400 font-roboto'>Taskify</h1>
            <div className='flex items-center gap-x-2'>
              <Link href={"/"}><HiOutlineHome size={20}/></Link>
            <ModeToggle/>
            </div>
        </div>
    </div>
  )
}

export default Headers