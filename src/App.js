import React, { Component } from "react";
import "./App.css";
import List from "./components/list/list";

import gameDetails from "./components/games-details/games-details";

import { getGamesList } from "./services/gameListClient";

import { getGamesNameList, getGamesCoverList } from "./services/gameListClient";

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
    // const {gamesList} = this.state
    // console.log('App.render ===>',gamesList)
    return (
      <div className="App">
        <header className="App-header">
          <List></List>
          <gameDetails></gameDetails>
        </header>
        <input type="text"></input>
      </div>
    );
  }
}
