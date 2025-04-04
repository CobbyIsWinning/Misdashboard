

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MIS Dashboard</div>
      <ul className="navbar-nav">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/users">User</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar