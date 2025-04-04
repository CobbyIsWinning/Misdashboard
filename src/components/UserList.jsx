

import { Link } from 'react-router-dom'

const UserList = ({ users, onDelete, onToggleStatus }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.type}</td>
              <td>
                <span className={`status-badge ${user.isActive ? 'active' : 'inactive'}`}>
                  {user.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td>{formatDate(user.lastActive)}</td>
              <td className="actions">
                <Link to={`/users/edit/${user.id}`} className="btn btn-sm btn-edit">Edit</Link>
                <button 
                  onClick={() => onToggleStatus(user.id)} 
                  className="btn btn-sm btn-status"
                >
                  {user.isActive ? 'Deactivate' : 'Activate'}
                </button>
                <button 
                  onClick={() => onDelete(user.id)} 
                  className="btn btn-sm btn-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList