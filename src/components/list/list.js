import React, { Component } from "react";
//import gameListClient from "./services/gameListClient"


export default class List extends Component {

  static defaultProps = {
    data: [],
    show: false
  };

  toggleTitle() {
    const { show } = this.state
    this.setState({
      show: !show
    })
  }

  gameNameCoverList() {
    const { show } = this.state
    if (!show) {
      return
    }
    return (
      <div>
        dsfghjkl
      </div>
    )
  }

  gameList() {
    const { data } = this.props;
    return data.map((item, index) => (
      <li key={index}>
        <div onClick={this.toggleTittle.bind(this)}>{item.title}</div>
        {this.gameNameCoverList(item)}
      </li>
    ));
  }

  render() {
    return (
      <div className="gameList">
        <ul>
          <li>
            {this.gameList()}
          </li>
        </ul>
      </div>
    );
  }
}