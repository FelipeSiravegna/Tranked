import './App.css'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import SignUp from './components/SignUp/SignUp';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';

function LayoutWithNavBar(){
  return(
    <div>
      <NavBar/>
      {/* Componentes hijos */}
      <Outlet/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Components with navbar */}
        <Route element={<LayoutWithNavBar/>}>
          <Route path="/profile" element={<Profile/>}/>
        </Route>

        {/* Components without navbar */}
        <Route path="/login" element={<LogIn/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
      </Routes>
    </Router>
  )
}

export default App