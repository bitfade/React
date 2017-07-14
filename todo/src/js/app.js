/* eslint no-console: 0 */
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import 'plugins/bootstrap'
import 'main.scss'

import TodoAppContainer from 'containers/TodoAppContainer'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <TodoAppContainer/>,
  document.getElementById('app')
)
