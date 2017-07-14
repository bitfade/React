import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils'
import TodoActionTypes from 'data/TodoActionTypes'
import TodoDispatcher from 'data/TodoDispatcher'

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
        return state
      default:
        return state
    }
  }
}

export default new TodoStore()
