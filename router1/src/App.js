import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Support from './pages/Support'
import About from './pages/About'
import Labs from './pages/Labs'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import MainHeader from './components/MainHeader'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>

        <Route path='/' element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path='/support' element={<Support />} />
          <Route path='/about' element={<About />} />
          <Route path='/labs' element={<Labs />} />
          <Route path='*' element={<NotFound />} />

        </Route>

      </Routes>


    </div>
  )
}

export default App
