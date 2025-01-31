import Footer from '@/components/Footer'
import Headers from '@/components/Headers'
import TodoList from '@/components/todoList'
import React from 'react'

const page = () => {
  return (
    <main>
        <Headers/>
        <TodoList/>
        <Footer/>
    </main>
  )
}

export default page