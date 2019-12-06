import React, { Component } from 'react';
import PlayerList from './components/PayerList';
import './App.css';


class App extends Component {
  constructor() {
    super();
    
  }

  
  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Players</h1>
        <PlayerList />
      </div>
    );
  }
}

export default App;
