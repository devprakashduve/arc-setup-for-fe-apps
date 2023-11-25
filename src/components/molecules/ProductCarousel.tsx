import React from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number
  imageUrl: string
  title: string
  price: number
}

interface ProductCarouselProps {
  products: Product[]
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className="product-carousel">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          price={product.price}
          onAddToCart={() => console.log(`Added ${product.title} to cart`)}
        />
      ))}
    </div>
  )
}

export default ProductCarousel
