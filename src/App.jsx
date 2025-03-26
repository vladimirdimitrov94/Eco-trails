import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/register/Register'
import AddTrail from './components/add-trail/AddTrail'
import EditTrail from './components/edit-trail/EditTrail'
import NavBar from './components/nav-bar/NavBar'
import HeroSection from './components/hero-section/HeroSection'
import NotFound from './components/not-found/NotFound'
import Trails from './components/trails/Trails'
import Details from './components/trail-details/TrailDetails'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <NavBar />

      <Routes>
        <Route path='/' element={<HeroSection />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/trails' element={<Trails />}/>
        <Route path='/trails/:trailId' element={<Details />}/>
        <Route path='/add' element={<AddTrail />}/>
        <Route path='/edit/:trailId' element={<EditTrail />}/>
        <Route path='/*' element={<NotFound />}/>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
