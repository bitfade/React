'use strict'
import React from 'react'
import ReactDOM from 'react-dom'

if (module.hot) {
  module.hot.accept()
}

class Button extends React.Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  };

  render () {
    return (
      <button onClick={this.handleClick} >
        {this.state.counter}
      </button>
    )
  }
}

ReactDOM.render(<Button />, mountNode)
