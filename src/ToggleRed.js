import React, { Component } from 'react';
class ToggleRed extends Component {
  constructor(){
    super();
    this.state = {
      active: false,
    }
  }
  handleClick = () => {
    this.setState({
      active: !this.state.active,
    })
  }
  render() {
    return <button onClick={this.handleClick} className={this.state.active ? "red" : ""}>⛔</button>;
  }
}
export default ToggleRed;