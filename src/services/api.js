
// Mock API service using localStorage
const API_KEY = 'ecom_dashboard_products'

export const getProducts = async () => {
  const products = JSON.parse(localStorage.getItem(API_KEY)) || []
  return products
}

export const getProductById = async (id) => {
  const products = await getProducts()
  return products.find(p => p.id === id)
}

export const createProduct = async (product) => {
  const products = await getProducts()
  const newProduct = { ...product, id: Date.now().toString() }
  localStorage.setItem(API_KEY, JSON.stringify([...products, newProduct]))
  return newProduct
}

export const updateProduct = async (id, product) => {
  const products = await getProducts()
  const updatedProducts = products.map(p => p.id === id ? product : p)
  localStorage.setItem(API_KEY, JSON.stringify(updatedProducts))
}

export const deleteProduct = async (id) => {
  const products = await getProducts()
  const filteredProducts = products.filter(p => p.id !== id)
  localStorage.setItem(API_KEY, JSON.stringify(filteredProducts))
}