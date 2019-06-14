import React, { Component } from "react";
import "./App.css";
import List from "./components/list/list";
import gameDetails from "./components/games-details/games-details";
import { getGamesNameList, getGamesCoverList } from "./services/gameListClient";

export default class App extends Component {
  async componentDidMount() {
    const gamesNameList = await getGamesNameList("games");
    const gamesCoverList = await getGamesCoverList("covers");
    console.log("App.render ===>", gamesNameList);
    this.setState({
      gamesNameList,
      gamesCoverList
    });
  }

  state = { title: 'test', cover: '', name: ''}

  onChangeTitle (event) {
    this.setState({
      title: event.currentTarget.value
      // ici on fera en sorte qu'on récupère les infos de la liste
      //gamesNameList, gamesCoverList: event.currentTarget.value
    })
  }

  render() {
    const{title} = this.state
    const {gamesNameList,gamesCoverList} = this.props
    console.log('App.render ===>',gamesNameList)
    console.log('App.render ===>',gamesCoverList)
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
          LA PICHE GAME'S
        </header>
        <List list = {gamesCoverList} cover = {gamesNameList}></List>
        <gameDetails></gameDetails>
        <input type="text" onChange={(...args) => this.onChangeTitle(...args)}/>
        <div>
          {title}
        </div>  
      </div>
    );
  }
}
