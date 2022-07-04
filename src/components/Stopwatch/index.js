import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="stopwatch-container">
          <h1>Stopwatch</h1>
          <div className="time-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="timer-image"
              />
              <h1 className="heading">Timer</h1>
            </div>
            <h1 className="stopwatch-timer">00:00:00</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
