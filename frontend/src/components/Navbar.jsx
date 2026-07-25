import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Navbar({ dashboard = false }) {
  const { logout } = useAuth(); const navigate = useNavigate()
  function handleLogout() { logout(); navigate('/login') }
  return <header className="navbar"><Link className="brand" to="/"><span className="brand-mark">L</span>LeadDesk <small>mini</small></Link><nav>{dashboard ? <button className="button ghost" onClick={handleLogout}>Log out</button> : <Link className="admin-link" to="/login">Admin login <span>↗</span></Link>}</nav></header>
}
