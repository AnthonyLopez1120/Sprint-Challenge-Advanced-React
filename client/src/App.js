import React from 'react';
import axios from "axios"
import './App.css';
import DarkMode from "./components/DarkModeBtn"


class App extends React.Component{
  constructor(){
    super()

    this.state = {
      api : "http://localhost:5000/api/players",
      players: []
    }
  }



  componentDidMount(){
    axios.get(this.state.api)
    .then(res=>{
      const list = res.data
      // console.log("data pulled")
      this.setState({players: list})
    })
    .catch(err=>{
      // console.log("error data not pulled", err)
    })
  }

  render(){

    return (
      <>
     <h1>Most Searched Players</h1>
    <DarkMode/>

     <div className = "list">
     <ol>
        {this.state.players.map(player =>
        (<li className = "list-item">{player.name} from {player.country}, {player.searches} searches</li>
        ))}
      </ol>
     </div>
     </>
    )
    }
  }
  
export default App;
