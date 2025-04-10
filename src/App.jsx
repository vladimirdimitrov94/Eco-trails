import './App.css'

import { Routes, Route } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'

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
import Logout from './components/logout/Logout'
import UserProfile from './components/user-profile/UserProfile'
import About from './components/about/About'
import MyTrails from './components/my-trails/MyTrails'
import PrivateGuard from './guards/PrivateGuard'
import AuthenticatedGuard from './guards/AuthenticatedGuard'


function App() {


    return (
        <AuthContextProvider>
            <NavBar />

            <Routes>
                <Route path='/' element={<HeroSection />} />
                <Route path='/trails' element={<Trails />} />
                <Route path='/trails/details/:trailId' element={<Details />} />
                <Route path='/about' element={<About />} />

                <Route element={<AuthenticatedGuard />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>

                <Route element={<PrivateGuard />}>
                    <Route path='/profile' element={<UserProfile />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/mytrails' element={<MyTrails />} />
                    <Route path='/edit/:trailId' element={<EditTrail />} />
                    <Route path='/trails/add' element={<AddTrail />} />
                </Route>

                <Route path='/*' element={<NotFound />} />
            </Routes>

            <Footer />

        </AuthContextProvider>
    )
}

export default App
