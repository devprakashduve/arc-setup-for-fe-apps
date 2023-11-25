import React from 'react'
import ProductDetailsOrganism from '../organisms/ProductDetailsOrganism'

const ProductDetailPage: React.FC = () => {
  // Retrieve product data or pass it as props
  const productData = {
    // Product data here
  }

  return (
    <div className="product-detail-page">
      <ProductDetailsOrganism productData={productData} />
      {/* Other product-related components or sections */}
    </div>
  )
}

export default ProductDetailPage
