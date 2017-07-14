/* eslint no-console: 0 */
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import 'plugins/bootstrap'
import 'main.scss'

import TodoAppContainer from 'containers/TodoAppContainer'
import TodoActions from 'data/TodoActions'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <TodoAppContainer/>,
  document.getElementById('app')
)

TodoActions.addTodo('test 1')
TodoActions.addTodo('test 2')
TodoActions.deleteTodo(1)
