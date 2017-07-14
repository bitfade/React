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
      todos: TodoStore.getState()
    }
  }

  render () {
    return (
      <div className="todo-application">
        <Title text="React / Flux Todo List"/>
        <TodoNew
          placeholder="New Todo"
          value=""
          add={TodoActions.addTodo}
        />
        <TodoList
          list={this.state.todos}
          toggle={TodoActions.toggleTodo}
          remove={TodoActions.deleteTodo}
        />
      </div>
    )
  }
}

const container = Container.create(TodoApp)
export default container
