import React, { Component } from 'react'

export default class UserDataDisplay extends Component {
  render() {
    return (
      <span>{this.props.name}</span>
    )
  }
}
