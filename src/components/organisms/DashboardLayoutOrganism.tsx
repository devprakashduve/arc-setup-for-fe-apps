import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Header from './Header'
import Footer from './Footer'

interface DashboardLayoutOrganismProps {
  user: string
  sidebarItems: string[]
  content: React.ReactNode
}

const DashboardLayoutOrganism: React.FC<DashboardLayoutOrganismProps> = ({
  user,
  sidebarItems,
  content,
}) => {
  return (
    <div className="dashboard-layout">
      <Header user={user} />
      <div className="dashboard-content">
        <Sidebar items={sidebarItems} />
        <MainContent>{content}</MainContent>
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayoutOrganism
