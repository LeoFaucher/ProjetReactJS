import React, { Component } from 'react'
import "./Data.css";
export default class Data extends Component {

  static defaultProps = {
    datas: []
  }

  render () {
    const {datas} = this.props
    return (
      <ul>
        {datas.map(data => (
          <li key={data.id}>
            <a href={data.url}>{data.name}</a>
          </li>
        ))}
      </ul>
    )
  }
}