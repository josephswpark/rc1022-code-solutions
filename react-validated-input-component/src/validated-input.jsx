import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      value: '',
      message: '',
      icon: ''
    });
    this.passwordCheck = this.passwordCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  passwordCheck(event) {
    event.preventDefault();
    if (this.state.value.length === 0) {
      this.setState({
        message: 'A password is required',
        icon: 'fa-solid fa-sm fa-x'
      });
    } else if (this.state.value.length < 8) {
      this.setState({
        message: 'Your password is too short!',
        icon: 'fa-solid fa-sm fa-x'
      });
    } else {
      this.setState({
        message: '',
        icon: 'fa-solid fa-sm fa-check'
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.passwordCheck}>
        <label htmlFor='password'>Password</label><br/>
        <input id="password" name="password-box" type="password" onChange={this.handleChange} value={this.state.value}></input>
        <i className={this.state.icon}></i>
        <p className='message'> {this.state.message} </p>
      </form>
    );
  }
}
