import React from 'react'
import ConversationList from './ConversationList'
import MessageThread from './MessageThread'
import UserStatus from './UserStatus'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

interface MessagingAppOrganismProps {
  conversations: Message[][]
  activeConversation: number
  userStatus: boolean
}

const MessagingAppOrganism: React.FC<MessagingAppOrganismProps> = ({
  conversations,
  activeConversation,
  userStatus,
}) => {
  return (
    <div className="messaging-app">
      <div className="conversation-list">
        <ConversationList conversations={conversations} />
      </div>
      <div className="message-thread">
        <MessageThread messages={conversations[activeConversation]} />
      </div>
      <div className="user-status">
        <UserStatus online={userStatus} />
      </div>
    </div>
  )
}

export default MessagingAppOrganism
