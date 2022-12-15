import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ click: 0 });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(clickNumber => ({ click: clickNumber.click + 1 }));
  }

  render() {
    let color;
    if (this.state.click < 3) {
      color = 'purple';
    } else if (this.state.click < 6) {
      color = 'light-purple';
    } else if (this.state.click < 9) {
      color = 'salmon';
    } else if (this.state.click < 12) {
      color = 'orange';
    } else if (this.state.click < 15) {
      color = 'yellow';
    } else {
      color = 'white';
    }
    return (
      <button onClick={this.handleClick} className= {color}>Hot Button</button>
    );
  }
}
