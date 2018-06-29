import React, { Component } from 'react';
import { Icon } from 'react-icons-kit'
import { ic_timer } from 'react-icons-kit/md/ic_timer'
import './Timer.css';

const COUNTDOWN = 120000;

class Timer extends Component {
  constructor(props) {
    super(props);
    this.timer;

    this.state = {
      countdownTime: COUNTDOWN,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ countdownTime: this.state.countdownTime - 1000 })
    }, 1000);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.countdownTime === 0) {
      clearInterval(this.timer);
      this.setState({ countdownTime: null });
      this.props.onFinishGame();
    }
  }

  millisToMinutesAndSeconds = (millis) => {
    const delim = ":";
    let minutes = Math.floor(millis / (1000 * 60) % 60);
    let seconds = Math.floor(millis / 1000 % 60);
  
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + delim + seconds;
  }

  render() {
    return (
      <div className="Timer">
        <div className="Timer__icon">
         <Icon size={64} icon={ic_timer} />
        </div>
        <div className="Timer__time">
          <h1>{this.millisToMinutesAndSeconds(this.state.countdownTime)}</h1>
        </div>
      </div>
    );
  }
};

export default Timer;