import React, { Component } from 'react';
import './App.css';
import NewDoodle from './components/NewDoodle';
import Palette from './components/Palette';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Doodle and Post!</h1>
        <div className="components">
          <Palette />
          <NewDoodle />
        </div>
      </div>
    );
  }
}

export default App;
