
import { Link } from 'react-router-dom'

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="product-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td className="actions">
                <Link to={`/products/edit/${product.id}`} className="btn btn-sm btn-edit">Edit</Link>
                <button 
                  onClick={() => onDelete(product.id)} 
                  className="btn btn-sm btn-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList