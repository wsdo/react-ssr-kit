import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { createAction, createApiAction } from 'actions'
import axios from 'axios'
// import {
//   fetchApi, postApi, fetchJson, feAuthFetchApi, feAuthPostApi
// } from 'common/service/api'
import * as types from 'consts/ActionTypes'
// import store from 'store'
// const {
//   GET_ARTICLE_LIST
// } = actionTypes

// const pathname = window.location.pathname
// export const list = createApiAction(types.GET_ARTICLE_LIST, (params) => {
//   return axios.get('/v1/article/list', params)
// })
export const list = () =>{
  return [
    { type: types.GET_ARTICLE_LIST },
    (params) => (axios.get('/v1/article/list', params).then((res)=>{
      return res
    }))
  ]
}
// export default bindActionCreators({
//   list
// }, store.dispatch)


// export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
//   return class ConnectComponent extends React.Component {
//     static contextTypes = {
//       store: PropTypes.object
//     }

//     constructor(props, context) {
//       super(props, context)
//       this.state = {
//         props: {}
//       }
//     }

//     componentDidMount() {
//       const { store } = this.context
//       store.subscribe(() => this.update())
//       this.update()
//     }

//     list() {
//       // 获取mapStateToProps和mapDispatchToProps 放入this.props里
//       const { store } = this.context
//       const stateProps = mapStateToProps(store.getState())
//       // 方法不能直接给，因为需要dispatch
//       // function addGun(){
//       //   return { type: ADD_GUN }
//       // }
//       // 直接执行addGun() 毫无意义
//       // 要 addGun = ()=>store.dispatch(addGun()) 才有意义,其实就是用dispatch把actionCtreators报了一层
//       const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
//       // console.log(stateProps)
//       this.setState({
//         props: {
//           ...this.state.props,
//           ...stateProps,
//           ...dispatchProps
//         }
//       })
//     }

//     render() {
//       return <WrapComponent {...this.state.props}></WrapComponent>
//     }
//   }
// }
