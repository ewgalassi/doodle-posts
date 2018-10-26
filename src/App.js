import React, { Component } from 'react';
import './App.css';
import NewDoodle from './components/NewDoodle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Doodle and Post!</h1>
        <NewDoodle />
      </div>
    );
  }
}

export default App;
