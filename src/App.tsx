
import Login from './pages/Login'
import { HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Analytic from './pages/Analytic'
import Timeline from './pages/Timeline'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/login"}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboardV2" element={<Dashboard />} />
          <Route path="/analytic" element={<Analytic/>}/>
          <Route path="/timeline" element={<Timeline/>}/>
        </Routes>
      </Router>
    </>
  )
}
