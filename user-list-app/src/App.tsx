import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Main, Users } from './pages'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="users" element={<Users />} />
      </Routes>   
    </div>
  )
}

export default App
