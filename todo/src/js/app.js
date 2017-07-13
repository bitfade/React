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
      <form className="form todo-new" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Add</button>
          </span>
        </div>
      </form>
    )
  }
}

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.id = props.id
    this.toggle = this.toggle.bind(this)
    this.remove = this.remove.bind(this)
  }

  toggle (e) {
    this.props.toggle(this.id)
  }

  remove (e) {
    this.props.remove(this.id)
  }

  render () {
    const className = 'todo-status fa fa-check' + ((this.props.done ? ' text-success' : ''))
    return (
      <li className="list-group-item todo">
        <i className={className} onClick={this.toggle}></i>
        {this.props.text}
        <i className="todo-delete fa fa-minus-circle text-danger" onClick={this.remove}></i>
      </li>
    )
  }
}

const TodoList = (props) => {
  return (
    <ul className="list-group todo-list">
      {props.list.map((v, i) => <Todo
        key={i}
        id={i}
        text={v.text}
        done={v.done}
        toggle={props.toggle}
        remove={props.remove}
      />)}
    </ul>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.state = {
      todos: [
        {
          done: false,
          text: 'Todo 1'
        },
        {
          done: true,
          text: 'Very very long Todo 2'
        }
      ]
    }
  }

  addTodo (text) {
    if (text) {
      this.setState((prevState, props) => ({
        todos: [...prevState.todos, {text, done: false}]
      }))
    }
  }

  toggleTodo (id) {
    this.setState((prevState, props) => {
      prevState.todos[id].done = !prevState.todos[id].done
      return prevState
    })
  }

  removeTodo (id) {
    this.setState((prevState, props) => ({
      todos: prevState.todos.filter((v, i) => i !== id)
    }))
  }

  render () {
    return (
      <div className="todo-application">
        <Title text="Todo React Application"/>
        <TodoNew
          placeholder="New Todo"
          value=""
          add={this.addTodo}
        />
        <TodoList
          list={this.state.todos}
          toggle={this.toggleTodo}
          remove={this.removeTodo}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
