import React, { Component } from 'react'
import { connect } from 'react-redux'

import { dumpUser } from '../../actions/user'

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.dumpUser}>logout</button>
      </div>
    )
  }
}

export default connect(null, { dumpUser })(LogoutButton)