

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserList from '../components/UserList'
import { UserContext } from '../context/UserContext'

const Users = () => {
  const { users, loading, removeUser, toggleStatus } = useContext(UserContext)

  if (loading) return <div>Loading...</div>

  return (
    <div className="users-page">
      <div className="page-header">
        <h1>Users ({users.length})</h1>
        <Link to="/users/add" className="btn btn-primary">Add User</Link>
      </div>
      <UserList 
        users={users} 
        onDelete={removeUser}
        onToggleStatus={toggleStatus}
      />
    </div>
  )
}

export default Users