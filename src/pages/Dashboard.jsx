
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Dashboard = () => {
  const { products } = useContext(ProductContext)

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard