import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { authenticated } = useAuth(); const location = useLocation()
  return authenticated ? children : <Navigate to="/login" replace state={{ from: location }} />
}
