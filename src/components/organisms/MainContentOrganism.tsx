import React from 'react'
import BlogPost from '../molecules/BlogPost'
import ProductCarousel from '../molecules/ProductCarousel'
import FeatureList from '../molecules/FeatureList'

interface MainContentOrganismProps {
  blogPosts: any[] // Replace with actual data structure
  products: any[] // Replace with actual data structure
  features: any[] // Replace with actual data structure
}

const MainContentOrganism: React.FC<MainContentOrganismProps> = ({
  blogPosts,
  products,
  features,
}) => {
  return (
    <main className="main-content">
      <BlogPost
        content={blogPosts}
        title={''}
        author={{
          name: '',
          avatarUrl: '',
          status: 'online',
        }}
      />
      <ProductCarousel products={products} />
      <FeatureList features={features} />
    </main>
  )
}

export default MainContentOrganism
