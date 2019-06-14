import React, { Component } from "react";
import "./App.css";
import List from "./components/list/list";
import { getGamesNameList, getGamesCoverList, getGamesDetailsList } from "./services/gameListClient";

export default class App extends Component {

  async componentDidMount() {
    const data = await gamesNameList
    const gamesNameList = await getGamesNameList();
    const gamesDetailsList = await getGamesDetailsList("covers");
    const gamesCoverList = await getGamesCoverList("covers");
    console.log("App.render ===>", gamesNameList, gamesDetailsList);
    this.setState({
      data,
      gamesNameList,
      gamesCoverList,
      gamesDetailsList,
    });
  }

  state = { title: 'test', cover: '', name: '' }

  onChangeTitle(event) {
    this.setState({
      title: event.currentTarget.value
      //ici on fera en sorte qu'on récupère les infos de la liste
      //gamesNameList, gamesCoverList: event.currentTarget.value
    })
  }

  render() {
    const { title } = this.state
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
        <input type="text" onChange={(...args) => this.onChangeTitle(...args)} />
        <div>
          {title}
        </div>
      </div>
    );
  }
}