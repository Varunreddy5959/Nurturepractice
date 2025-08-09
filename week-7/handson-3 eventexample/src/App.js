import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      rupees: '',
      euro: ''
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
    this.sayHello();
    this.staticMessage();
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  sayHello = () => {
    console.log("Hello");
  };

  staticMessage = () => {
    console.log("This is a static message");
  };

  handleWelcome = (msg) => {
    alert(msg);
  };

  handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic event triggered:", event.type);
  };

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const euro = (parseFloat(this.state.rupees) * 0.011).toFixed(2);
    this.setState({ euro });
  };
  

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        


        <p> {this.state.count}</p>
        <button onClick={this.increment}>Increment</button><br />
        <button onClick={this.decrement}>Decrement</button><br />
        <button onClick={() => this.handleWelcome('Welcome')}>Say Welcome</button><br />
        <button onClick={this.handleClick}>Click Me</button>

        <h2 className='currency-converter'>Currency Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Rupees: </label>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && <p>Euro: €{this.state.euro}</p>}
      </div>
    );
  }
}

export default App;
