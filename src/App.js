import React, { Component } from "react";
import "./App.css";
import List from "./components/list/list";
// import gameDetails from "./components/games-details/games-details";
// import { getGamesList } from "./services/gameListClient";

import { getGamesNameList, getGamesCoverList } from "./services/gameListClient";

export default class App extends Component {
  // async componentDidMount() {
  //   const gamesNameList = await getGamesNameList("games");
  //   const gamesCoverList = await getGamesCoverList("covers");
  //   console.log('App.render ===>',gamesNameList)
  //   this.setState({
  //     gamesNameList,
  //     gamesCoverList,
  //   })
  // }
  render() {
    // const {gamesList} = this.state
    // console.log('App.render ===>',gamesList)
    return (
      <div className="App">
        <header className="App-header">
          <img id='logo' src='https://st3.depositphotos.com/9866364/19226/i/1600/depositphotos_192261768-stock-photo-laptop-gamepad-headphones-potato-chips.jpg' alt='Logo' height='300' width='300'/>
          LA PICHE GAMES'
        </header>
        <List></List>
        <gameDetails></gameDetails>
        <input type="text"></input>
      </div>
    );
  }
}
