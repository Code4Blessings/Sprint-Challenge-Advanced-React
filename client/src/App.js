import React, { Component } from 'react';
import PlayerList from './components/PlayerList';
import NavBar from './components/NavBar';
import './App.css';


class App extends Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayerList />
      </div>
    );
  }
}

export default App;
