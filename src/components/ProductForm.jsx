

const ProductForm = ({ product, setProduct, onSubmit }) => {
    const handleChange = (e) => {
      const { name, value } = e.target
      setProduct(prev => ({ ...prev, [name]: value }))
    }
  
    return (
      <form onSubmit={onSubmit} className="product-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Books">Books</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          {product.id ? 'Update' : 'Add'} Product
        </button>
      </form>
    )
  }
  
  export default ProductForm