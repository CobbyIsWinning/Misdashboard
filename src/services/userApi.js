

const USER_KEY = 'ecom_dashboard_users'

export const getUsers = async () => {
  const users = JSON.parse(localStorage.getItem(USER_KEY)) || []
  return users
}

export const getUserById = async (id) => {
  const users = await getUsers()
  return users.find(u => u.id === id)
}

export const createUser = async (user) => {
  const users = await getUsers()
  const newUser = { 
    ...user, 
    id: Date.now().toString(),
    isActive: true,
    lastActive: new Date().toISOString()
  }
  localStorage.setItem(USER_KEY, JSON.stringify([...users, newUser]))
  return newUser
}

export const updateUser = async (id, user) => {
  const users = await getUsers()
  const updatedUsers = users.map(u => u.id === id ? {
    ...user,
    lastActive: new Date().toISOString()
  } : u)
  localStorage.setItem(USER_KEY, JSON.stringify(updatedUsers))
}

export const deleteUser = async (id) => {
  const users = await getUsers()
  const filteredUsers = users.filter(u => u.id !== id)
  localStorage.setItem(USER_KEY, JSON.stringify(filteredUsers))
}

export const toggleUserStatus = async (id) => {
  const users = await getUsers()
  const updatedUsers = users.map(u => u.id === id ? {
    ...u,
    isActive: !u.isActive,
    lastActive: new Date().toISOString()
  } : u)
  localStorage.setItem(USER_KEY, JSON.stringify(updatedUsers))
  return updatedUsers.find(u => u.id === id)
}