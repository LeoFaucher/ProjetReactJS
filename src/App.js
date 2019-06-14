import React, { Component } from "react";
import "./App.css";
import { getGamesNameList, getGamesCoverList, getGamesDetailsList, getCover } from "./services/gameListClient";
import Data from "./components/Data"

export default class App extends Component {
  state = {
    search : '',
    datas : []
  }

  async componentDidMount() {
    const datas = await getGamesNameList();
    //const datas = await getCover();
    this.setState({ datas });
  }


  updateSearch(event) {
    const search = event.currentTarget.value
    this.setState({ search: search.toLowerCase() })
  }
      //ici on fera en sorte qu'on récupère les infos de la liste
      //gamesNameList, gamesCoverList: event.currentTarget.value

  render() {
   const { search , datas } = this.state
   const filteredGames = datas.filter(datas => {
    return datas.name.toLowerCase().indexOf(search) !== -1
  })
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
        <div>
        <input type="search" onChange={this.updateSearch.bind(this)} />       
          
        </div>
        <Data datas={filteredGames}></Data>
      </div>
    );
  }
}