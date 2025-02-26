import React from 'react'
import HomePage from './pages/HomePage.js'
import UserForm from './pages/UserForm.js'
import UsersTable from './pages/UsersTable.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/userform" element={< UserForm />} />
          <Route path="/users" element={< UsersTable />} />

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App