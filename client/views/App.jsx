import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../config/router'
import { connect } from 'react-redux'
import { list } from '../actions/article'

// 装饰器模式
@connect(
  state => ({ num: state }),
  { list }
)

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('props', props)
    // article.list()
    // list()
    this.props.list()
  }

  componentDidMount() {
    // do something here
  }

  render() {
    return [
      <div key="banner">
        {this.props.data}
        <Link to="/">首页</Link>
        <br />
        <Link to="/detail">详情页</Link>
      </div>,
      <Routes key="routes" />
    ]
  }
}

// function mapStateToProps(state) {
//   console.log('state', state)
//   return {
//     data: state.article[0].data
//   }
// }

// export default connect(mapStateToProps)(App)
export default App;
