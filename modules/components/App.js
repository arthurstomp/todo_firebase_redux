/* jshint ignore:start */
import React, { PropTypes } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({onLoad}) => {
  return (
    <div onLoad={onLoad()}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

App.propTypes = {
  onLoad: PropTypes.func.isRequired
}

export default App
