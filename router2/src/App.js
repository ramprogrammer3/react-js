import "./App.css";

import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Private from "./components/Private";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={
          <Private isLoggedIn={isLoggedIn}>
            <About />
          </Private>
        } />

        <Route path="/contact" element={
          <Private isLoggedIn={isLoggedIn}>
            <Contact />
          </Private>
        } />

        <Route path="/dashboard" element={
          <Private isLoggedIn={isLoggedIn}>
            <Dashboard />
          </Private>
        } />

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>

  )
}

export default App