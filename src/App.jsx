import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import DetailPage from './pages/DetailPage'

const Layout = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <Outlet />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='/pokemon/:id' element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App