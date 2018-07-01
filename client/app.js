import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from './views/App.jsx'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
// import App from './components/App'
// ReactDOM.render(<App />,document.getElementById('root'))

// const store = createStore(reducer)
const store = createStore(reducer, applyMiddleware(thunk))

const root = document.getElementById('root')
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </AppContainer>
    </Provider>,
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
