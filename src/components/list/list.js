import React, { Component } from "react";

export default class List extends Component {
  static defaultProps = {
    games: [],
    show: false
  };
  toggleTittle() {
    const { show } = this.state;
  }

  gameList() {
    const { games } = this.props;
    return games.map((item, index) => (
      <li key={index}>
        <div onClick={this.toggleTittle.bind(this)}>{item.title}</div>
      </li>
    ));
  }

  render() {
    return (
      <div className="gameList">
        <ul>{this.gameList()}</ul>
      </div>
    );
  }
}
