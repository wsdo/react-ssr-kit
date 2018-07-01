import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import TodoTextInput from '../components/TodoTextInput'
// import { addTodo } from '../actions'

export const Header = () => (
    <h1>todos</h1>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(Header)
