

import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import ProductForm from '../components/ProductForm'

const AddEditProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products, addProduct, editProduct } = useContext(ProductContext)
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: ''
  })

  useEffect(() => {
    if (id) {
      const existingProduct = products.find(p => p.id === id)
      if (existingProduct) {
        setProduct(existingProduct)
      }
    }
  }, [id, products])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      editProduct(id, product)
    } else {
      addProduct(product)
    }
    navigate('/products')
  }

  return (
    <div className="product-form-page">
      <h1>{id ? 'Edit' : 'Add'} Product</h1>
      <ProductForm 
        product={product} 
        setProduct={setProduct} 
        onSubmit={handleSubmit} 
      />
    </div>
  )
}

export default AddEditProduct