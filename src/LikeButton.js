import React, { Component } from 'react';
class LikeButton extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    }
  }
  handleClick = () => {
    this.setState({
      count: this.state.count+1,
    })
  }
  render() {
    return <button onClick={this.handleClick} className="like">💖 {this.state.count}</button>;
  }
}
export default LikeButton;