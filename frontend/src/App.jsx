import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from './assets/images/start-up-1.png';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className={`app-container ${isAuthPage ? 'auth-bg' : 'default-bg'}`}
         style={!isAuthPage ? {backgroundImage: `url(${backgroundImage})`} : {}}>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App