import React, { Component } from "react";


export default class List extends Component {

  static defaultProps = {
    games: [],
    show: false
  };

  toggleTitle() {
    const { show } = this.props
    this.setState({
      show: !show
    })
  }

  gameNameCoverList() {
    const { show } = this.props
    if (!show) {
      return
    }
    return (
      <div>
        dsfghjkl
      </div>
    )
  }

  render() {
    const { games } = this.props;
    return (
      <div className="gameList">
        {games.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    )
  }
}