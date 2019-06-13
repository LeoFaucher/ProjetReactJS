import React, { Component } from "react";
import "./App.css";
import List from "./components/list/list";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import gameDetails from "./components/games-details/games-details";
=======
>>>>>>> Stashed changes
import { getGamesList } from "./services/gameListClient";
=======
import { getGamesNameList, getGamesCoverList } from "./services/gameListClient";
import { getGamesDetailsList } from "./services/gameListClient";
>>>>>>> Stashed changes

export default class App extends Component {
  async componentDidMount() {
    const gamesNameList = await getGamesNameList("games");
    const gamesCoverList = await getGamesCoverList("covers");
    console.log('App.render ===>',gamesNameList)
    this.setState({
      gamesNameList,
      gamesCoverList,
    })
  }
  render() {
    const {gamesList} = this.state
    console.log('App.render ===>',gamesList)
    return (
      <div className="App">
        <header className="App-header">
<<<<<<< Updated upstream
          <List></List>
          <gameDetails></gameDetails>
=======
          LA PICHE GAMES'
          <List />
>>>>>>> Stashed changes
        </header>
        <input type="text"></input>
      </div>
    );
  }
}
