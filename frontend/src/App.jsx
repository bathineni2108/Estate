import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Profile from './pages/Profile';

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}