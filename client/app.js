import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from './views/App.jsx'

// ReactDOM.render(<App />,document.getElementById('root'))


const root = document.getElementById('root')
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root
  )
}


render(App)
if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const NextApp = require('./views/App.jsx').default
    // ReactDOM.render(<NextApp />, document.getElementById('root'))
    render(NextApp)
  })
}
