import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increase = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState + 10}))
    }
  }

  decrease = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <h2 className="heading2">Speed is {speed}mph</h2>
        <p className="description"> Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button className="accelerate" onClick={this.increase}>
            Accelerate
          </button>
          <button className="break" onClick={this.decrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
