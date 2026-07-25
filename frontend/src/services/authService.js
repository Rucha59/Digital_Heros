import api from './api'
import { getToken, removeToken, saveToken } from '../utils/token'

export async function login(credentials) {
  const { data } = await api.post('/auth/login', credentials)
  saveToken(data.token)
  return data
}

export function logout() { removeToken() }
export function isAuthenticated() { return Boolean(getToken()) }
