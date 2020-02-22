// importing the react lib to edit the Component
import React, {Component} from 'react';

// calling counter Component to extend
class Counter extends Component {
  constructor () {
    super();
    // ja
    this.state = {
      // never change the type of data.
      count: 0,
      text: true,
    }
  }
  Clear = () => {
    this.setState ({
      count: 0,
    })
  }
  // this is where we are going to put our methods
  Increment = () => {
    this.setState ({
      count: this.state.count + 1,
    })
  }
  Decrement = () => {
    this.setState ({
      count: this.state.count - 1,
    })
  }
  SingleDouble = () => {
      this.setState ({
        text: !this.state.text
      })
  }


  render () {
    return (
      <div className="container">
        <div className="navbar">Counter</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.Clear}>Clear</button>
          <button type="button" onClick={this.Increment}>Increment</button>
          <button type="button" onClick={this.Decrement}>Decrement</button>
          <button type="button" onClick={this.SingleDouble}>{this.state.text? "Single Count" : "Double Count"}</button>
        </div>
      </div>
    )
  }
}

// exporting the counter Component
export default Counter;
