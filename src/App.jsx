

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { UserProvider } from './context/UserContext';
import { VendorProvider } from './context/VendorContext';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddEditProduct from './pages/AddEditProduct';
import Users from './pages/Users';
import AddEditUser from './pages/AddEditUser';
import Vendors from './components/Vendors';
import CreateVendor from './pages/CreateVendor';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <VendorProvider>
        <ProductProvider>
          <UserProvider>
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
                {/* Protected routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/add" element={<AddEditProduct />} />
                    <Route path="products/edit/:id" element={<AddEditProduct />} />
                    <Route path="users" element={<Users />} />
                    <Route path="users/add" element={<AddEditUser />} />
                    <Route path="users/edit/:id" element={<AddEditUser />} />
                    <Route path="vendors" element={<Vendors />} />
                    <Route path="vendors/create" element={<CreateVendor />} />
                    <Route path="vendors/edit/:id" element={<CreateVendor />} />
                  </Route>
                </Route>
                <Route path="*" element={<Navigate to="/login" replace />} />
              </Routes>
            </Router>
          </UserProvider>
        </ProductProvider>
      </VendorProvider>
    </AuthProvider>
  );
}

export default App;