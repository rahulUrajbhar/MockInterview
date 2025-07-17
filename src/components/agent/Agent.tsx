import React from 'react'

interface AgentProps {
  userName: string;
  userId: string;
  type: string;
}

const Agent: React.FC<AgentProps> = ({ userName, userId, type }) => {
  return (
    <div>Interview Agent</div>
  )
}

export default Agent