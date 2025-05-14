

import { createContext, useState, useEffect } from 'react';
import { 
  getVendors, 
  createVendor, 
  updateVendor, 
  deleteVendor,
  getVendorById
} from '../services/api';

export const VendorContext = createContext();

export function VendorProvider({ children }) {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVendors = async (searchQuery = '') => {
    try {
      setLoading(true);
      const data = await getVendors(searchQuery);
      setVendors(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch vendors');
      console.error('Error fetching vendors:', err);
    } finally {
      setLoading(false);
    }
  };

  const addVendor = async (vendor) => {
    try {
      const newVendor = await createVendor(vendor);
      setVendors(prev => [...prev, newVendor]);
      return { success: true };
    } catch (err) {
      console.error('Error adding vendor:', err);
      return { success: false, error: err.message };
    }
  };

  const editVendor = async (id, vendor) => {
    try {
      const updatedVendor = await updateVendor(id, vendor);
      setVendors(prev => prev.map(v => v.id === id ? updatedVendor : v));
      return { success: true };
    } catch (err) {
      console.error('Error updating vendor:', err);
      return { success: false, error: err.message };
    }
  };

  const removeVendor = async (id) => {
    try {
      await deleteVendor(id);
      setVendors(prev => prev.filter(v => v.id !== id));
      return { success: true };
    } catch (err) {
      console.error('Error deleting vendor:', err);
      return { success: false, error: err.message };
    }
  };

  const getVendor = async (id) => {
    try {
      return await getVendorById(id);
    } catch (err) {
      console.error('Error fetching vendor:', err);
      return null;
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <VendorContext.Provider 
      value={{ 
        vendors, 
        loading, 
        error, 
        fetchVendors,
        addVendor, 
        editVendor, 
        removeVendor,
        getVendor
      }}
    >
      {children}
    </VendorContext.Provider>
  );
}