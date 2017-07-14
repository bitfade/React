import React from 'react'

export default class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.id = props.id
    this.toggle = this.toggle.bind(this)
    this.remove = this.remove.bind(this)
  }

  toggle (e) {
    this.props.toggle(this.id)
  }

  remove (e) {
    this.props.remove(this.id)
  }

  render () {
    const className = 'todo-status fa fa-check' + ((this.props.done ? ' text-success' : ''))
    return (
      <li className="list-group-item todo">
        <i className={className} onClick={this.toggle}></i>
        {this.props.text}
        <i className="todo-delete fa fa-minus-circle text-danger" onClick={this.remove}></i>
      </li>
    )
  }
}
