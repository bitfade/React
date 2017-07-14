import React from 'react'
import Todo from 'components/Todo'

const TodoList = (props) => {
  return (
    <ul className="list-group todo-list">
      {[...props.list.values()].map(v => <Todo
        key={v.id}
        id={v.id}
        text={v.text}
        done={v.done}
        toggle={props.toggle}
        remove={props.remove}
      />)}
    </ul>
  )
}

export default TodoList
