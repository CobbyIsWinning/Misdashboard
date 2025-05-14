

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <Navbar user={user} />
      <div className="dashboard-content">
        {user && (
          <div className="user-greeting">
            Welcome, {user.name} ({user.role})
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;