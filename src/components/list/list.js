import React, { Component } from 'react'


export default class List extends Component {
    static defaultProps = {
        games: [],
        show : false
    }
toggleTittle() {
const {show} = this.state 
}

gameList() {
const {list} = this.props
return list.map((item, index) =>(
    <li key={index}>
        <div onClick={this.toggleTittle.bind(this)}>{item.title}</div>
        {list}
    </li>
    ))
}



render() {
    const {game} = this.state
    return (
        <div className="gameList">
            <ul>
                {this.gameList()}
            </ul>
        </div>
    )
}



}