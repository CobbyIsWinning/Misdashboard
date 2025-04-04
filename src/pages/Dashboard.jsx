
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { UserContext } from '../context/UserContext'

const Dashboard = () => {
  const { products } = useContext(ProductContext)
  const { users } = useContext(UserContext)

  const activeUsers = users.filter(user => user.isActive).length

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{users.length}</p>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <p>{activeUsers}</p>
          </div>
      </div>
    </div>
  )
}

export default Dashboard