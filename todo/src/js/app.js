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

class TodoNew extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: this.props.value
    }
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.add(this.state.value)
    this.setState({
      value: ''
    })
  }

  render () {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2 mb-sm-0"
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
}

const Todo = (props) => {
  return (
    <li className="list-group-item">{props.text}</li>
  )
}

const TodoList = (props) => {
  return (
    <ul className="list-group">
      {props.list.map((v, i) => <Todo id={i} text={v.text} done={v.done}/>)}
    </ul>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
    this.state = {
      todos: [
        {
          done: false,
          text: 'Todo 1'
        },
        {
          done: false,
          text: 'Todo 2'
        }
      ]
    }
  }

  addTodo (value) {
    console.log(value)
  }

  render () {
    return (
      <div>
        <Title text="Todo Application"/>
        <TodoNew
          placeholder="New Todo"
          value=""
          add={this.addTodo}
        />
        <TodoList list={this.state.todos}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
