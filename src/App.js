import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Forms from './components/Forms';

class App extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <br/><br/>
          <div className = "container">
                <Forms />
          </div>
      </div>
    );
  }
}

export default App;
