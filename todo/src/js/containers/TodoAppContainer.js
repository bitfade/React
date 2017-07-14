import TodoAppView from 'views/TodoAppView'
import {Container} from 'flux/utils'
import TodoStore from 'data/TodoStore'
import TodoActions from 'data/TodoActions'

function getStores () {
  return [
    TodoStore
  ]
}

function getState () {
  return {
    todos: TodoStore.getState(),
    onAddTodo: TodoActions.addTodo,
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo
  }
}

export default Container.createFunctional(TodoAppView, getStores, getState)
