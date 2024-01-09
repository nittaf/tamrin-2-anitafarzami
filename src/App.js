
import './App.css';
import { Component } from 'react';
class Counter extends Component {
  state = {
    number: 0,
  };

  handleNumberChange1 = () =>
  {
    this.setState({
      number: this.state.number +1
    })
  }

  handleNumberChange2 = () =>
  {
    this.setState({
      number: this.state.number -1
    })
  }

  handleNumberChange3 = () =>
  {
    this.setState({
      number: this.state.number +5
    })
  }

  handleNumberChange4 = () =>
  {
    this.setState({
      number: this.state.number -5
    })
  }
  render() {
    return <div>
    <div id='box' className='box' >
      <button onClick={this.handleNumberChange1}>
        +1
      </button>
      <button onClick={this.handleNumberChange2}>
        -1
      </button>   
      <div>
        {this.state.number}
      </div>
      <button onClick={this.handleNumberChange3}>
        +5
      </button>
      <button onClick={this.handleNumberChange4}>
        -5
      </button>
      
    </div>
  </div>;
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
