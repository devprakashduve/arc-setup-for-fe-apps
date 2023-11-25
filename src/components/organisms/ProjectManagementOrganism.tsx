import React from 'react'
import ProjectList from './ProjectList'
import TaskBoard from './TaskBoard'
import TeamMembers from './TeamMembers'

interface Project {
  id: number
  name: string
  description: string
  status: string
  tasks: string[]
}

interface TeamMember {
  id: number
  name: string
  role: string
  avatar: string
}

interface ProjectManagementOrganismProps {
  projects: Project[]
  team: TeamMember[]
}

const ProjectManagementOrganism: React.FC<ProjectManagementOrganismProps> = ({
  projects,
  team,
}) => {
  return (
    <div className="project-management">
      <div className="project-list">
        <ProjectList projects={projects} />
      </div>
      <div className="task-board">
        <TaskBoard projects={projects} />
      </div>
      <div className="team-members">
        <TeamMembers team={team} />
      </div>
    </div>
  )
}

export default ProjectManagementOrganism
