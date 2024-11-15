import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path="/success" element = { <ProtectedRoute element={ <Success /> } /> } />
          <Route path='/*' element={ <Error />} />
          <Route path='/*' element={ <Error />} />
        </Routes>
        <Cart />
      </Router>
    </>
  )
}

export default App
