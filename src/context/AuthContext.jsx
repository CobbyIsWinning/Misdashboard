

import { createContext, useState, useEffect, useContext } from 'react'
import { login as apiLogin, logout as apiLogout, getCurrentUser } from '../services/api'

const AuthContext = createContext()

export const AuthProvider = ({ children, navigate }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
 

  useEffect(() => {
    const initializeAuth = async () => {
      const currentUser = getCurrentUser()
      setUser(currentUser)
      setLoading(false)
    }
    initializeAuth()
  }, [])

  const login = async (phone, password) => {
    try {
      const { token, user } = await apiLogin(phone, password)
      localStorage.setItem('authToken', token)
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      navigate('/')
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    apiLogout()
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}