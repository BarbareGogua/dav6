
import React from 'react'
import '../../index.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rate: {product.rating}</p>
      {product.rating > 3 && <p className="best-seller">Best Seller</p>}
      {product.stock === 0 && <p className="out-of-stock">Out of Stock</p>}
    </div>
  )
}

export default ProductCard

