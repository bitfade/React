'use strict'
if (module.hot) {
  module.hot.accept()
}

class Button extends React.Component {
  state: { counter: 0 };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
}
