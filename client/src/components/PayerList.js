import React, { Component } from 'react'
import axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerList extends Component {
    constructor() {
        super();
        this.state = {
            players: []
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
    render() {
        return(
            <div className="player-list">

            </div>
        );
    }
}

export default PlayerList;