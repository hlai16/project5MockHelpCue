import React, { Component } from 'react';
class ToggleGreen extends Component {
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
    return <button onClick={this.handleClick} className={this.state.active ? "green" : ""}>🦸‍♂️</button>;
  }
}
export default ToggleGreen;