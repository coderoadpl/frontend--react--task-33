import React from 'react'
import Button from './Button'

export const App = () => {
  return (
    <div>
      <Button
        showChildren={false}
      >
        <span>
          <b>Click</b> me
        </span>
      </Button>
    </div>
  )
}

export default App
