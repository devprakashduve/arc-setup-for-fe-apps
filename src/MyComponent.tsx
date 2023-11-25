// ExampleComponent.tsx

import React from 'react'

const ExampleComponent: React.FC = () => {
  return (
    <div>
      <button className="px-4 py-2 button button-primary text-secondary text-green-400">
        Primary Button
      </button>
      <button className="px-4 py-2  button button-secondary">
        Secondary Button
      </button>
    </div>
  )
}

export default ExampleComponent
