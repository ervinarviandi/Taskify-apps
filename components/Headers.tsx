import React from 'react'
import { ModeToggle } from './atoms/modeToggle'
import Link from 'next/link'

const Headers = () => {
  return (
    <div className='w-full border-b '>
        <div className='lg:max-w-6xl mx-auto px-5 py-5 flex justify-between'>
            <h1 className='text-2xl font-bold text-purple-500'>Taskify</h1>
            <div className='flex items-center gap-2'>
              <Link href={"/"}>Back</Link>
            <ModeToggle/>
            </div>
        </div>
    </div>
  )
}

export default Headers