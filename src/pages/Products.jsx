

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../components/ProductList'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
  const { products, loading, removeProduct } = useContext(ProductContext)

  if (loading) return <div>Loading...</div>

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Products</h1>
        <Link to="/products/add" className="btn btn-primary">Add Product</Link>
      </div>
      <ProductList products={products} onDelete={removeProduct} />
    </div>
  )
}

export default Products