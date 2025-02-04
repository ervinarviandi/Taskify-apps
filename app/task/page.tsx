"use client"
import Footer from '@/components/Footer'
import Headers from '@/components/Headers'
import TodoList from '@/components/todoList'
import React from 'react'
import {motion} from "framer-motion"

const Page = () => {
  return (
    <>
      <motion.section  className='w-full relative ' initial={{ y: 250 }} animate={{ y: -10 }} transition={{ type: "spring" }}>
        <Headers />
        <TodoList/>
        <Footer/>
      </motion.section>
    </>
  )
}
export default Page