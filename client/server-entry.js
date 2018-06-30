import React from 'react'
import App from './views/App.jsx'
import { StaticRouter } from 'react-router-dom'

export default () => {
  return (
    <StaticRouter>
      <App />
    </StaticRouter>
  )
}
