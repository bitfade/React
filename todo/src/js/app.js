/* eslint no-console: 0 */
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import 'plugins/bootstrap'
import 'main.scss'

import Title from 'components/Title'
import TodoNew from 'components/TodoNew'
import TodoList from 'components/TodoList'

if (module.hot) {
  module.hot.accept()
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.state = {
      todos: []
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
