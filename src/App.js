import React, { Component } from "react";
import "./App.css";
import { getGamesNameList, getGamesCoverList, getGamesDetailsList, getCover } from "./services/gameListClient";
import Data from "./components/Data"

export default class App extends Component {
  state = {
    title : "",
    datas : []
  }

  async componentDidMount() {
    const datas = await getGamesNameList();
    //const datas = await getCover();
    this.setState({ datas });
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
   const { title , datas } = this.state
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
        <input type="text" onChange={(...args) => this.onChangeTitle(...args)} />
        <div>
          {title}
        </div>
        <Data datas={datas}></Data>
      </div>
    );
  }
}