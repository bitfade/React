import TodoAppView from 'views/TodoAppView'
import {Container} from 'flux/utils'
import TodoStore from 'data/TodoStore'

function getStores () {
  return [
    TodoStore
  ]
}

function getState () {
  return {
    todos: TodoStore.getState()
  }
}

export default Container.createFunctional(TodoAppView, getStores, getState)
