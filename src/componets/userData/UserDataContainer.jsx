import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import Display from './UserDataDisplay';
import Login from '../login';
import LogoutButton from '../logout/LogoutButton'

class UserDataContainer extends Component {

  isTherAUser() {
    const user = this.props.user

    if (user.userId) {
      return (
        <div>
          <Display name={user.name} />
          <LogoutButton />
        </div>
      )
    }
    return (
      <div>
        <Login />
        <Link to='/submit' >Sine up</Link>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.isTherAUser()}
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.user
  }
}

export default connect(mapStateToProps)(UserDataContainer)