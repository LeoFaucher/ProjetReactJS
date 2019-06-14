import React, { Component } from 'react'
import "./Data.css";
export default class Data extends Component {

  static defaultProps = {
    datas: []
  }
  state = {
    show: false
  }

  toggleTitle() {
    const {show} = this.state

    this.setState({
      show: !show
    })
  }

  renderTime(datas) {
    const {show} = this.state

    if (!show) {
      return
    }
    return (
      <div>
          IMAGE
      </div>
    )
  }


  renderList() {
    const {datas} = this.props
    return datas.map(data => (
      <li key={data.id}>
        <div>
          <a href={data.url}>{data.name}</a>
        </div>
        {this.renderTime(datas)}
      </li>
   
     ))
  }


  render () {
    const {show} = this.state
    return (  
      <div>
        <button onClick={this.toggleTitle.bind(this)}>
          {show ? 'Hide' : 'Show'}
        </button>
          <ul>
            {this.renderList()}
          </ul>
      </div>
    )
  }
}