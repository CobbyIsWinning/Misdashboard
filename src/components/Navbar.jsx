import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ user }) => {
  const { logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">MIS Dashboard</div>
      <ul className="navbar-nav">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/vendors">Vendors</Link></li>
      </ul>
      {user && (
        <div className="user-actions">
          <span className="user-name">{user.name}</span>
          <button onClick={logout} className="btn btn-logout">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;