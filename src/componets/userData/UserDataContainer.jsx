import React, { Component } from 'react';
import { connect } from 'react-redux';

import Display from './UserDataDisplay';
import Login from '../login/LoginContainer';
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
    return <Login />
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