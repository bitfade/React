import React from 'react'

import Title from 'components/Title'
import TodoList from 'components/TodoList'
import TodoNew from 'components/TodoNew'

import TodoStore from 'data/TodoStore'
import TodoActions from 'data/TodoActions'
import {Container} from 'flux/utils'

class TodoApp extends React.Component {
  static getStores () {
    return [TodoStore]
  }

  static calculateState (prevState) {
    return {
      todos: TodoStore.getState(),
      onAddTodo: TodoActions.addTodo,
      onDeleteTodo: TodoActions.deleteTodo,
      onToggleTodo: TodoActions.toggleTodo
    }
  }

  render () {
    return (
      <div className="todo-application">
        <Title text="Todo React Application"/>
        <TodoNew
          placeholder="New Todo"
          value=""
          add={this.state.onAddTodo}
        />
        <TodoList
          list={this.state.todos}
          toggle={this.state.onToggleTodo}
          remove={this.state.onDeleteTodo}
        />
      </div>
    )
  }
}

const container = Container.create(TodoApp)
export default container
