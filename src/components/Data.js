import React, { Component } from 'react'

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
            {data.name}
          </li>
        ))}
      </ul>
    )
  }
}