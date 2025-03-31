

import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout