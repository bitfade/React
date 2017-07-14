import React from 'react'

export default class TodoNew extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: this.props.value
    }
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.add(this.state.value)
    this.setState({
      value: ''
    })
  }

  render () {
    return (
      <form className="form todo-new" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Add</button>
          </span>
        </div>
      </form>
    )
  }
}
