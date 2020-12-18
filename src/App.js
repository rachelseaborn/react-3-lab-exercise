import React, { Component } from 'react'
//import data from './data.js'
import logo from './logo.svg';
import './App.css';

/*My biggest suggestion with this project is to NOT use a map method to display the index cards, it doesn't work. I would instead place an value on state called index, and use it to access individual cards with array bracket notation. Save yourself the headache and avoid the map method for today! */

class App extends Component {
  constructor() {
    super()
    this.state = {
      userArray: []
    }
  }

  render() {
    return (
      <button onClick={this.previousPlaceholder} >Previous</button>
      <button onClick={this.nextPlaceholder}>Next</button>
      <div className="App">
        <header className="App-header">
          <p>Home</p>
        </header>
      </div>
    )
  }
}



export default App;
