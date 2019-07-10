import React, { Component } from 'react'

import UserData from '../userData/UserDataContainer'

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>BlackJack</h1>
        <UserData />
      </header>
    )
  }
}
