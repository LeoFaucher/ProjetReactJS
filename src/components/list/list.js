import React, { Component } from "react";
import Button from '@material-ui/core/Button';


export default class List extends Component {

  static defaultProps = {
    games: [],
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
    const { games } = this.props;
    return games.map((item, index) => (
      <li key={index}>
        <div onClick={this.toggleTittle.bind(this)}>{item.title}</div>
        {this.gameNameCoverList(item)}
      </li>
    ));
  }

  render() {
    const { show } = this.props
    return (
      <div className="gameList">
        <Button variant="outlined" color="secondary" className="show" onClick={this.toggleTitle.bind(this)}>{show ? 'Hide' : 'Show'}
        </Button>
        <ul>
          <li>
            {this.gameList()}
          </li>
        </ul>
      </div>
    );
  }
}