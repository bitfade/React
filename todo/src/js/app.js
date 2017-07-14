/* eslint no-console: 0 */
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import 'plugins/bootstrap'
import 'main.scss'

import TodoApp from 'components/TodoApp'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
)
