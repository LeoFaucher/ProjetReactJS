import React, { Component } from "react";
import "./App.css";
import List from "./components/list/list";
import { getGamesNameList, getGamesCoverList, getGamesDetailsList } from "./services/gameListClient";

export default class App extends Component {

  state = { details: [] }

  async componentDidMount() {
    const gamesNameList = await getGamesNameList("games");
    const gamesDetailsList = await getGamesDetailsList("covers");
    const gamesCoverList = await getGamesCoverList("covers");
    this.setState({
      gamesNameList,
      gamesCoverList,
      gamesDetailsList
    });
  }

  onChangeDetails(event) {
    this.setState({
      cover: event.currentTarget.value,
      details: event.currentTarget.value
    })
    return this.state
  }

  render() {
    const { gamesNameList, gamesCoverList, gamesDetailsList } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img
            id="logo"
            src="https://st3.depositphotos.com/9866364/19226/i/1600/depositphotos_192261768-stock-photo-laptop-gamepad-headphones-potato-chips.jpg"
            alt="Logo"
            height="300"
            width="300"
          />
          CLARA GAME'S PICHIES !!!
        </header>
        <List list={gamesCoverList} cover={gamesNameList}></List>
        <List details={gamesDetailsList}></List>
        <input type="text" onChange={(...args) => this.onChangeDetails(...args)} />
      </div>
    );
  }
}