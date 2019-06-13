import React, { Component } from "react";
import "./App.css";
import List from "./components/list/list";
import gameDetails from "./components/games-details/games-details";
import { getGamesList } from "./services/gameListClient";

export default class App extends Component {
  async componentDidMount() {
    getGamesList("games");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <List></List>
          <gameDetails></gameDetails>
        </header>
      </div>
    );
  }
}
