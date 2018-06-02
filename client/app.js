import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App.jsx'

// ReactDOM.render(<App />,document.getElementById('root'))

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root,
  )
}


render(App)
if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = App.default
    // ReactDOM.render(<NextApp />, document.getElementById('root'))
    render(NextApp)
  })
}
