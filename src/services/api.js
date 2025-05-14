const API_BASE_URL = 'http://your-django-api.com/api';

// Auth endpoints
export const login = async (phone, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    return data; // { token, user }
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Vendor endpoints
export const getVendors = async (searchQuery = '') => {
  const token = localStorage.getItem('authToken');
  const url = searchQuery 
    ? `${API_BASE_URL}/vendors/?search=${encodeURIComponent(searchQuery)}`
    : `${API_BASE_URL}/vendors/`;

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to fetch vendors');
  return await response.json();
};

export const getVendorById = async (id) => {
  const token = localStorage.getItem('authToken');
  const response = await fetch(`${API_BASE_URL}/vendors/${id}/`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to fetch vendor');
  return await response.json();
};

export const createVendor = async (vendorData) => {
  const token = localStorage.getItem('authToken');
  const response = await fetch(`${API_BASE_URL}/vendors/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(vendorData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create vendor');
  }
  return await response.json();
};

export const updateVendor = async (id, vendorData) => {
  const token = localStorage.getItem('authToken');
  const response = await fetch(`${API_BASE_URL}/vendors/${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(vendorData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update vendor');
  }
  return await response.json();
};

export const deleteVendor = async (id) => {
  const token = localStorage.getItem('authToken');
  const response = await fetch(`${API_BASE_URL}/vendors/${id}/`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to delete vendor');
};

// Product endpoints - Added to fix the missing exports
export const getProducts = async (searchQuery = '') => {
  const token = localStorage.getItem('authToken');
  const url = searchQuery 
    ? `${API_BASE_URL}/products/?search=${encodeURIComponent(searchQuery)}`
    : `${API_BASE_URL}/products/`;

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to fetch products');
  return await response.json();
};

export const getProductById = async (id) => {
  const token = localStorage.getItem('authToken');
  const response = await fetch(`${API_BASE_URL}/products/${id}/`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to fetch product');
  return await response.json();
};

export const createProduct = async (productData) => {
  const token = localStorage.getItem('authToken');
  const response = await fetch(`${API_BASE_URL}/products/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create product');
  }
  return await response.json();
};

export const updateProduct = async (id, productData) => {
  const token = localStorage.getItem('authToken');
  const response = await fetch(`${API_BASE_URL}/products/${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update product');
  }
  return await response.json();
};

export const deleteProduct = async (id) => {
  const token = localStorage.getItem('authToken');
  const response = await fetch(`${API_BASE_URL}/products/${id}/`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to delete product');
};

// Add other API endpoints as needed...