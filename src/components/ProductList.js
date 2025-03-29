
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import '../index.css'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>იტვირთება...</p>
  if (error) return <p style={{ color: 'red' }}>შეცდომა: {error}</p>

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList


