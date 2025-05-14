

import { Link } from 'react-router-dom';

const VendorList = ({ vendors, onDelete, searchQuery, setSearchQuery }) => {
  return (
    <div className="vendor-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by vendor or business name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Business</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map(vendor => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.business_name}</td>
              <td>{vendor.phone}</td>
              <td>{vendor.email}</td>
              <td className="actions">
                <Link to={`/vendors/edit/${vendor.id}`} className="btn btn-sm btn-edit">
                  Edit
                </Link>
                <button 
                  onClick={() => onDelete(vendor.id)} 
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
  );
};

export default VendorList;