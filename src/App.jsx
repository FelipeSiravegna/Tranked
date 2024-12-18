import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import SignUp from './components/SignUp/SignUp';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Component routes */}
        <Route path="/login" element={<LogIn/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  )
}

export default App