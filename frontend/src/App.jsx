import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import RegisterSchool from './pages/Register/RegisterSchool'
import RegisterOffice from './pages/Register/RegisterOffice'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const location = useLocation();
  const isAuthPage = ['/', '/login', '/register', '/login/school', '/login/office', '/register/school', '/register/office'].includes(location.pathname);

  return (
    <div className={`app-container ${isAuthPage ? 'auth-bg' : 'default-bg'}`}>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login/school" element={
          <div className="auth-content">
            <Login type="school" />
          </div>
        } />
        <Route path="/login/office" element={
          <div className="auth-content">
            <Login type="office" />
          </div>
        } />
        <Route path='/register/school' element={
          <div className="auth-content">
            <RegisterSchool />
          </div>
        } />
        <Route path='/register/office' element={
          <div className="auth-content">
            <RegisterOffice />
          </div>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
