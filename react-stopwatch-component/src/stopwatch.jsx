import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, play: false, interval: null };
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
  }

  start() {
    if (this.state.play === false) {
      this.setState({ play: true });
      this.setState({
        interval: setInterval(() => {
          this.setState({ time: this.state.time + 1 });
        }, 1000)
      });
    } else {
      this.setState({ play: false });
      clearInterval(this.state.interval);
    }
  }

  reset() {

    this.setState({ time: 0 });
  }

  render() {
    const icon = this.state.play ? 'fa-pause' : 'fa-play';
    const time = this.state.time;
    return (
      <div className="container">
        <div className="background">
          <div className="timer" onClick={ this.reset }>{ time }</div>
        </div>
        <i className={'fa-solid icon ' + icon } onClick={ this.start }/>
      </div>
    );
  }
}
