import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './configureStore'

const store = configureStore()

export default store
// export const history = syncHistoryWithStore(browserHistory, store)
