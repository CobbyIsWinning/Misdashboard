

import { createContext } from 'react'
import useUsers from '../hooks/useUsers'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const userUtils = useUsers()
  return (
    <UserContext.Provider value={userUtils}>
      {children}
    </UserContext.Provider>
  )
}