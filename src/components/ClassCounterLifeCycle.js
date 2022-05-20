import React, { Component } from "react";

class ClassCounterLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p> Clicked {this.state.count} Times</p>
        <button onClick={this.incrementCount}>Click</button>
      </div>
    );
  }
}

export default ClassCounterLifeCycle;
