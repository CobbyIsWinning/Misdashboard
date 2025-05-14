

import { useState } from 'react';

const VendorForm = ({ vendor, setVendor, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="vendor-form">
      <div className="form-group">
        <label>Vendor Name</label>
        <input
          type="text"
          name="name"
          value={vendor.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Business Name</label>
        <input
          type="text"
          name="business_name"
          value={vendor.business_name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={vendor.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={vendor.email}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label>Address</label>
        <textarea
          name="address"
          value={vendor.address}
          onChange={handleChange}
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        {vendor.id ? 'Update' : 'Create'} Vendor
      </button>
    </form>
  );
};

export default VendorForm;