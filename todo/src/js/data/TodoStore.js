import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils'
import TodoActionTypes from 'data/TodoActionTypes'
import TodoDispatcher from 'data/TodoDispatcher'
import Todo from 'data/Todo'

let counter = 0

class TodoStore extends ReduceStore {
  constructor () {
    super(TodoDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        const id = counter++
        return state.set(
          id,
          new Todo({
            id,
            text: action.text,
            done: false
          })
        )

      case TodoActionTypes.DELETE_TODO:
        return state.delete(action.id)

      case TodoActionTypes.TOGGLE_TODO:
        return state.update(
          action.id,
          todo => todo.set('done', !todo.done)
        )

      default:
        return state
    }
  }
}

export default new TodoStore()
