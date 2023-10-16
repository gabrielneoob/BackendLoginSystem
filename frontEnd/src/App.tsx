import React from 'react'
import { MainRoutes } from './mainRoutes'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <header>
        <h1>Header</h1>
        <nav style={{ display: 'flex', flexDirection: 'row', gap: '5px'}}>
          <Link to="/">Home</Link>
          <Link to="/private">Private Page</Link>
        </nav>
      </header>
      <hr />
      <MainRoutes />
    </div>
  )
}

export default App