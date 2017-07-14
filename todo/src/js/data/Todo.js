import Immutable from 'immutable'

const Todo = Immutable.Record({
  id: '',
  text: '',
  done: false
})

export default Todo
