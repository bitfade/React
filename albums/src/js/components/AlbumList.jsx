import React from 'react'

export default class AlbumList extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.props.change(e.target.value)
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.reload()
  }

  render () {
    return (
      <form className="form album-list" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <select className="form-control" onChange={this.handleChange} value={this.props.selected}>
            {this.props.list.map(v => <option key={v.id} value={v.id}>{v.title}</option>)}
          </select>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Reload</button>
          </span>
        </div>
      </form>
    )
  }
}
