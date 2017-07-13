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

const TodoNew = (props) => {
  return (
    <form className="form-inline" onSubmit={props.handleSubmit}>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2 mb-sm-0"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      add: '',
      todos: []
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.add)
  }

  handleChange (e) {
    this.setState({
      add: e.target.value
    })
  }

  render () {
    return (
      <div>
        <Title text="Todo Application"/>
        <TodoNew
          placeholder="New Todo"
          value={this.state.add}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
