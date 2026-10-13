import React, { Component } from 'react';
import './App.css';
import Message from './Message';
import Power from './Power';
import Complex from './Complex';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: '',
      y: '',
      complex: ''
    };
  }

  render() {
    return (
      <div>
        <Message />
        <Message message="Hello from the second message!" />

        <h2>Power Calculator</h2>

        <div>
          <label htmlFor="numberX">Enter x: </label>
          <input
            id="numberX"
            type="text"
            value={this.state.x}
            onChange={(event) => this.setState({ x: event.target.value })}
            placeholder="Enter x"
          />
        </div>

        <div>
          <label htmlFor="numberY">Enter y: </label>
          <input
            id="numberY"
            type="text"
            value={this.state.y}
            onChange={(event) => this.setState({ y: event.target.value })}
            placeholder="Enter y"
          />
        </div>

        <Power x={this.state.x} y={this.state.y} />

        <h2>Complex Number Input</h2>

        <input
          type="text"
          value={this.state.complex}
          onChange={(event) => this.setState({ complex: event.target.value })}
          placeholder="e.g. 3+j4 or 3+i4"
        />

        <Complex value={this.state.complex} />
      </div>
    );
  }
}

export default App;