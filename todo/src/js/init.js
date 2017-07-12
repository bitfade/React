/* eslint no-console: 0 */
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import 'plugins/bootstrap'
import 'main.scss'

if (module.hot) {
  module.hot.accept()
}

const Title = props => <h1>{props.text}</h1>

const Button = () => {
  return (
    <h1>It Works</h1>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.todo = [

    ]
  }

  render () {
    return (
      <div>
        <Title text="Todo Application"/>
        <Button/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
