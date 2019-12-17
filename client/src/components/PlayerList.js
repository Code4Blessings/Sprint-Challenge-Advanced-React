import React, { Component } from 'react'
import axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerList extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            playerText: ""
        }
    }

    componentDidMount() {
     axios
     .get(`http://localhost:5000/api/players`)
     .then(response => {
         console.log(response.data);
         this.setState({
             players: response.data
         })
     })
     .catch(error => {
         console.log('Data returned an error', error);
     })
  }
  handleChange = event => {
      this.setState({
          playerText: event.target.value
      })
  }
  fetchPlayer = event => {
      axios
      .get(`http://localhost:5000/api/players/${this.state.playerText}/name`)
      .then(response => {
          console.log(response)
          this.setState({
              players: response.data
          })
      })
      .catch(error => {
          console.log('Data returned an error', error)
      }) 
  }
    render() {
        return(
            <div className="player-list">
                <input 
                type="text"
                value={this.state.playerText}
                onChange={this.handleChange} />
                <button onClick={this.fetchPlayer}>Fetch Player</button>
                {this.state.players.map(player => (
                    <PlayerCard 
                    key={player.id}
                    name={player.name}
                    location={player.country}
                    searches={player.searches}
                     />
                ))}
            </div>
        );
    }
}

export default PlayerList;