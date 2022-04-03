import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Main, SingleUser, Users } from './pages'

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<SingleUser />} />
        </Route>
        <Route path="*" element={<Main />} />
      </Routes>   
    </div>
  )
}

export default App
