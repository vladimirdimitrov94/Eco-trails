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
import { AuthContext } from './contexts/authContext'


function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        localStorage.setItem('auth', state.accessToken)
        setAuthState(state)
    }

    const contexData = {
        id: authState._id,
        accessToken: authState.accessToken,
        username: authState.username,
        email: authState.email,
        isAuthenticated: !!authState.email,
        changeAuthState
    }

    return (
        <AuthContext.Provider value={contexData}>
            <div>
                <NavBar />

                <Routes>
                    <Route path='/' element={<HeroSection />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/trails' element={<Trails />} />
                    <Route path='/trails/details/:trailId' element={<Details />} />
                    <Route path='edit/:trailId' element={<EditTrail />} />
                    <Route path='trails/add' element={<AddTrail />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    )
}

export default App
