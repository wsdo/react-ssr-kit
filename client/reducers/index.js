import { combineReducers } from 'redux'
// import todos from './todos'
import article from './article'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  // todos,
  ...article,
  visibilityFilter
})

export default rootReducer
