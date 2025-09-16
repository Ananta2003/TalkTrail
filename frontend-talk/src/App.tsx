import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { GoogleOAuthProvider } from '@react-oauth/google'
import UserLogin from './pages/UserLogin'
import ListEvent from './pages/ListEvent'
import UserSignup from './pages/UserSignup'
import AdminSignup from './pages/AdminSignup'


function App() {

  // if (!process.env.CLIENT_ID) {
  //   throw new Error("CLIENT_ID is not defined in environment variables");
  // }

  const CLIENT_ID = "161480599627-g0vcll09djetcqmo8gqqkjuaf94bvkl3.apps.googleusercontent.com"
  return (

    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/userlogin' element={<UserLogin/>} />
          <Route path='/admin' element={<ListEvent/>} />
          <Route path='/signupuser' element={<UserSignup/>} />
          <Route path='/signupadmin' element={<AdminSignup/>} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
