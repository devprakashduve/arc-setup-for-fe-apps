// import React from 'react'
// import MediaCard from './MediaCard'
// import FilterSection from './FilterSection'

// interface Media {
//   id: number
//   title: string
//   imageUrl: string
//   category: string
// }

// interface MediaGalleryOrganismProps {
//   media: Media[]
//   categories: string[]
//   selectedCategory: string
//   onCategoryChange: (category: string) => void
// }

// const MediaGalleryOrganism: React.FC<MediaGalleryOrganismProps> = ({
//   media,
//   categories,
//   selectedCategory,
//   onCategoryChange,
// }) => {
//   return (
//     <div className="media-gallery">
//       <FilterSection
//         categories={categories}
//         selectedCategory={selectedCategory}
//         onCategoryChange={onCategoryChange}
//       />
//       <div className="media">
//         {media.map((item) => (
//           <MediaCard
//             key={item.id}
//             imageUrl={item.imageUrl}
//             title={item.title}
//             category={item.category}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MediaGalleryOrganism
