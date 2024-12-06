import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Component routes */}
        <Route path="/login" element={<LogIn/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  )
}

export default App