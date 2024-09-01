import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import { AuthProvider } from './components/auth'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <AuthProvider>
    <Navbar />
     <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/profile" element={
          <ProtectedRoute>
           <Profile />
          </ProtectedRoute>}> 
          <Route path= "details" element={<ProfileDetails />} />
          <Route path= "settings" element={<ProfileSettings />} />
        </ Route>
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPost />}/>
        <Route path='/login' element={<Login />}/>
     </Routes>
    </AuthProvider>
  )
}

export default App