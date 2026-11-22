import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Profile from './pages/Profile'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}
