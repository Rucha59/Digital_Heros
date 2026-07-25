import { createContext, useMemo, useState } from 'react'
import * as authService from '../services/authService'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(authService.isAuthenticated())
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({
    authenticated, user,
    async login(credentials) { const account = await authService.login(credentials); setUser(account); setAuthenticated(true); return account },
    logout() { authService.logout(); setUser(null); setAuthenticated(false) },
  }), [authenticated, user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
