import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const [values, setValues] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function submit(event) {
        event.preventDefault()
        setLoading(true)
        setError('')

        try {
            await login(values)
            navigate(location.state?.from?.pathname || '/dashboard', {
                replace: true,
            })
        } catch {
            setError('Incorrect username or password. Please try again.')
            setLoading(false)
        }
    }

    return (
        <>
            <main className="login-page">
                <Link className="brand" to="/">
                    <span className="brand-mark">L</span>
                    LeadDesk <small>mini</small>
                </Link>

                <form className="login-card" onSubmit={submit}>
                    <p className="eyebrow">Admin access</p>

                    <h1>Welcome back.</h1>

                    <p>Sign in to manage incoming leads.</p>

                    <label>
                        Username
                        <input
                            required
                            value={values.username}
                            onChange={(e) =>
                                setValues({ ...values, username: e.target.value })
                            }
                            autoComplete="username"
                        />
                    </label>

                    <label>
                        Password
                        <input
                            required
                            type="password"
                            value={values.password}
                            onChange={(e) =>
                                setValues({ ...values, password: e.target.value })
                            }
                            autoComplete="current-password"
                        />
                    </label>

                    {error && <p className="error-message">{error}</p>}

                    <button className="button primary" disabled={loading}>
                        {loading ? 'Signing in…' : 'Sign in'} <span>↗</span>
                    </button>
                </form>
            </main>

            <footer className="footer-credit">
                Built for{" "}
                <a
                    href="https://digitalheroesco.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Digital Heroes Training Task
                </a>
            </footer>
        </>
    )
}