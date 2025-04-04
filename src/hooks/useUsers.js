

import { useState, useEffect } from 'react'
import { 
  getUsers, 
  createUser, 
  updateUser, 
  deleteUser, 
  getUserById,
  toggleUserStatus
} from '../services/userApi'

export default function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const data = await getUsers()
      setUsers(data)
    } catch (err) {
      setError('Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  const addUser = async (user) => {
    try {
      const newUser = await createUser(user)
      setUsers(prev => [...prev, newUser])
      return { success: true }
    } catch (err) {
      return { success: false, error: 'Failed to add user' }
    }
  }

  const editUser = async (id, user) => {
    try {
      await updateUser(id, user)
      setUsers(prev => prev.map(u => u.id === id ? user : u))
      return { success: true }
    } catch (err) {
      return { success: false, error: 'Failed to update user' }
    }
  }

  const removeUser = async (id) => {
    try {
      await deleteUser(id)
      setUsers(prev => prev.filter(u => u.id !== id))
      return { success: true }
    } catch (err) {
      return { success: false, error: 'Failed to delete user' }
    }
  }

  const getUser = async (id) => {
    try {
      return await getUserById(id)
    } catch (err) {
      return null
    }
  }

  const toggleStatus = async (id) => {
    try {
      const updatedUser = await toggleUserStatus(id)
      setUsers(prev => prev.map(u => u.id === id ? updatedUser : u))
      return { success: true }
    } catch (err) {
      return { success: false, error: 'Failed to toggle status' }
    }
  }

  useEffect(() => { fetchUsers() }, [])

  return { 
    users, 
    loading, 
    error, 
    addUser, 
    editUser, 
    removeUser, 
    getUser,
    toggleStatus,
    refetch: fetchUsers
  }
}