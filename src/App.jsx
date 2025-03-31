
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import DashboardLayout from './components/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import AddEditProduct from './pages/AddEditProduct'

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddEditProduct />} />
            <Route path="products/edit/:id" element={<AddEditProduct />} />
          </Route>
        </Routes>
      </Router>
    </ProductProvider>
  )
}

export default App