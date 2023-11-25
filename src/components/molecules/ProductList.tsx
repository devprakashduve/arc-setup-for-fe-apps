import React from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number
  imageUrl: string
  title: string
  price: number
}

interface ProductListProps {
  products: Product[]
  onAddToCart: (productId: number) => void
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          price={product.price}
          onAddToCart={() => onAddToCart(product.id)}
        />
      ))}
    </div>
  )
}

export default ProductList
