

const UserForm = ({ user, setUser, onSubmit }) => {
    const handleChange = (e) => {
      const { name, value } = e.target
      setUser(prev => ({ ...prev, [name]: value }))
    }
  
    return (
      <form onSubmit={onSubmit} className="user-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>User Type</label>
          <select
            name="type"
            value={user.type}
            onChange={handleChange}
            required
          >
            <option value="">Select user type</option>
            <option value="Aggregator">Aggregator</option>
            <option value="Customer">Customer</option>
            <option value="Supplier">Supplier</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password || ''}
            onChange={handleChange}
            required={!user.id} // Only required for new users
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          {user.id ? 'Update' : 'Create'} User
        </button>
      </form>
    )
  }
  
  export default UserForm