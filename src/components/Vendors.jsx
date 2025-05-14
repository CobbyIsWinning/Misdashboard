

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VendorList from '../components/VendorList';
import { getVendors, deleteVendor } from '../services/api';

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        setLoading(true);
        const data = await getVendors(searchQuery);
        setVendors(data);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchVendors();
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this vendor?')) {
      try {
        await deleteVendor(id);
        setVendors(vendors.filter(v => v.id !== id));
      } catch (error) {
        console.error('Error deleting vendor:', error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="vendors-page">
      <div className="page-header">
        <h1>Vendors</h1>
        <Link to="/vendors/create" className="btn btn-primary">
          Add Vendor
        </Link>
      </div>
      <VendorList 
        vendors={vendors} 
        onDelete={handleDelete}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default Vendors;