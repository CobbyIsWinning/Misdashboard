

import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { VendorContext } from '../context/VendorContext';
import VendorForm from '../components/VendorForm';
import LoadingSpinner from '../components/LoadingSpinner';

const VendorFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addVendor, editVendor, getVendor, loading } = useContext(VendorContext);
  const [vendor, setVendor] = useState({
    name: '',
    business_name: '',
    phone: '',
    email: '',
    address: '',
    is_active: true
  });

  useEffect(() => {
    if (id) {
      const fetchVendor = async () => {
        const existingVendor = await getVendor(id);
        if (existingVendor) {
          setVendor(existingVendor);
        }
      };
      fetchVendor();
    }
  }, [id, getVendor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await editVendor(id, vendor);
      } else {
        await addVendor(vendor);
      }
      navigate('/vendors');
    } catch (error) {
      console.error('Error saving vendor:', error);
    }
  };

  if (loading && id) return <LoadingSpinner />;

  return (
    <div className="page-container">
      <h1>{id ? 'Edit' : 'Create'} Vendor</h1>
      <VendorForm 
        vendor={vendor} 
        setVendor={setVendor} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
};

export default VendorFormPage;