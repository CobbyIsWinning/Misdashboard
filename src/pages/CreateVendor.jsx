

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VendorForm from '../components/VendorForm';
import { createVendor } from '../services/api';

const CreateVendor = () => {
  const navigate = useNavigate();
  const [vendor, setVendor] = useState({
    name: '',
    business_name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createVendor(vendor);
      navigate('/vendors');
    } catch (error) {
      console.error('Error creating vendor:', error);
    }
  };

  return (
    <div className="vendor-form-page">
      <h1>Create Vendor</h1>
      <VendorForm 
        vendor={vendor} 
        setVendor={setVendor} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
};

export default CreateVendor;