
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import DashboardLayout from './components/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import AddEditProduct from './pages/AddEditProduct'
import { UserProvider } from './context/UserContext'
import Users from './pages/Users'
import AddEditUser from './pages/AddEditUser'


function App() {
  return (
    <ProductProvider>
      <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddEditProduct />} />
            <Route path="products/edit/:id" element={<AddEditProduct />} />
            <Route path="users" element={<Users />} />
            <Route path="users/add" element={<AddEditUser />} />
            <Route path="users/edit/:id" element={<AddEditUser />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </Router>
      </UserProvider>
    </ProductProvider>
  )
}

export default App