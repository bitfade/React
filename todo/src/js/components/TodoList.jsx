import React from 'react'
import Todo from 'components/Todo'

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

export default TodoList
