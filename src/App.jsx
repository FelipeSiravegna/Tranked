import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <Router>
      <Routes>
        {/* Component routes */}
        <Route path="/login" element={<LogIn/>} />
      </Routes>
    </Router>
  )
}

export default App