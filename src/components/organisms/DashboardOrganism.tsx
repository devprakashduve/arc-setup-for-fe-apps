// import React from 'react'
// import NotificationCard from '../molecules/NotificationCard'
// import ProductGrid from './ProductGrid'
// import Chart from './Chart'

// interface DashboardOrganismProps {
//   notifications: any[] // Replace with actual data structure
//   products: any[] // Replace with actual data structure
//   chartData: any[] // Replace with actual data structure
// }

// const DashboardOrganism: React.FC<DashboardOrganismProps> = ({
//   notifications,
//   products,
//   chartData,
// }) => {
//   return (
//     <div className="dashboard">
//       <div className="dashboard-notifications">
//         {notifications.map((notification, index) => (
//           <NotificationCard
//             key={index}
//             icon={notification.icon}
//             title={notification.title}
//             content={notification.content}
//             date={notification.date}
//           />
//         ))}
//       </div>
//       <div className="dashboard-products">
//         <ProductGrid products={products} />
//       </div>
//       <div className="dashboard-chart">
//         <Chart data={chartData} />
//       </div>
//     </div>
//   )
// }

// export default DashboardOrganism
