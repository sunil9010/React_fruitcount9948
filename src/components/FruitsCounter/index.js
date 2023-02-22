// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    count: 0,
    mac: 0,
  }

  mangoIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  bananaIncrement = () => {
    this.setState(prevState => ({mac: prevState.mac + 1}))
  }

  render() {
    const {count} = this.state
    const {mac} = this.state
    return (
      <div className="bg-main">
        <div className="bg-inner">
          <h1 className="heading">
            Bob ate<span className="span"> {count} </span> mangoes
            <span className="span"> {mac} </span> bananas
          </h1>
          <div className="inner-img">
            <div className="mm">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button
                  type="button"
                  onClick={this.mangoIncrement}
                  className="button1"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div>
                <button
                  type="button"
                  onClick={this.bananaIncrement}
                  className="button1"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
