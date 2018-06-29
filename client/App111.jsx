import React, { Component } from 'react'
import Routes from './config/router'

import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import TopicList from './views/topic-list/index'
import TopicDetail from './views/topic-detail/index'

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/list'>Inbox</Link></li>
          <li><Link to='/detail'>Messages</Link></li>
        </ul>
      </div>
    );
  }
}

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }

  render() {
    return (
      <div>
          <Switch>
          <Route path='/list' component={TopicList}></Route>
          <Route path='/detail' component={TopicDetail}></Route>
            <Redirect to='/list'></Redirect>
          </Switch>
      </div>
    );
    // return [
    //   <div key="banner">
    //     <Link to="/">首页</Link>
    //     <br />
    //     <Link to="/detail">详情页</Link>
    //   </div>,
    //   <Routes key="routes" />
    // ]
  }
}
