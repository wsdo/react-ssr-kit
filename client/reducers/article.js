import { handleActions } from 'redux-actions'
import * as types from 'consts/ActionTypes'

import {
  LIST,
  GET_ARTICLE_LIST
} from '../consts/ActionTypes'

const initialState = [
  {
    data: 'stark',
    list: ''
  }
]

// export default function article(state = initialState, action) {
//   console.log(action)
//   switch (action.type) {
//     case LIST:
//       return {
//         state,
//         data: 'starkwang'
//       }
//     case types.GET_ARTICLE_LIST:
//       return {
//         state,
//         list: action.data
//       }

//     default:
//       return state
//   }
// }
// const gls = handleActions(reducers, initialState)


let reducers = {
  // ...createApiReducers([
  //   GET_PAPER_DETAIL,
  //   GET_SOLUTION_DETAIL,
  //   GET_RESULT_DETAIL,
  //   SUBMIT_ANSWER
  // ]),
  [types.GET_ARTICLE_LIST](state = initialState, action) {
    return {
      state,
      data: 'starkwang',
      list: action.data
    }
  }
}
const article = handleActions(reducers, initialState)
console.log(article)
export default {
  article
}
