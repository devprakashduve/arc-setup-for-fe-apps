import React from 'react'
import Image from 'next/image'
import Button from '../atoms/Button'
import Badge from '../atoms/Badge'

interface ProductDetailsProps {
  imageUrl: string
  title: string
  description: string
  price: number
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  imageUrl,
  title,
  description,
  price,
}) => {
  return (
    <div className="product-details">
      <div className="product-image">
        <Image src={imageUrl} alt={title} />
      </div>
      <div className="product-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <Button
          text="Add to Cart"
          onClick={() => console.log(`Added ${title} to cart`)}
        />
      </div>
      <div className="product-tags">
        <Badge text="New" />
        {/* Additional badges/tags */}
      </div>
    </div>
  )
}

export default ProductDetails
