
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '300px' }}>
      <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <h3 style={{ fontSize: '1.2em', margin: '10px 0' }}>{product.title}</h3>
      <p style={{ margin: '5px 0' }}>{product.description}</p>
      <p style={{ margin: '5px 0' }}>Price: ${product.price}</p>
      <p style={{ margin: '5px 0' }}>Rate: {product.rating}</p>
      {product.rating > 3 && <p style={{ color: 'green', fontWeight: 'bold' }}>Best Seller</p>}
      {product.reting < 3 && <p style={{ color: 'red', fontWeight: 'bold' }}>Out of Stock</p>}
    </div>
  );
};

export default ProductCard;