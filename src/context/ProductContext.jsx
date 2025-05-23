// src/context/ProductContext.jsx
import { createContext, useState, useEffect } from 'react';
import { 
  getProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct,
  getProductById 
} from '../services/api';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    try {
      const newProduct = await createProduct(product);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  };

  const editProduct = async (id, updatedProduct) => {
    try {
      await updateProduct(id, updatedProduct);
      setProducts(products.map(p => p.id === id ? updatedProduct : p));
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  };

  const removeProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        addProduct,
        editProduct,
        removeProduct,
        fetchProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};