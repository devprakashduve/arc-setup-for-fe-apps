import React from 'react'
import Image from 'next/image'
import Button from '../atoms/Button'

interface ProductCardProps {
  imageUrl: string
  title: string
  price: number
  onAddToCart: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  onAddToCart,
}) => {
  return (
    <div className="product-card">
      <Image src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Button onClick={onAddToCart} text="Add to Cart" />
    </div>
  )
}

export default ProductCard
