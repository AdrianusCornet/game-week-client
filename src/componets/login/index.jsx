import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newUser } from '../../actions/user'

class index extends Component {
  initialText = {
    name: '',
    password: '',
    neadUsername: false,
    neadPassword: false,
  }
  state = {
    ...this.initialText,
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault()

    this.setState({
      neadUsername: this.state.name ? false : true,
      neadPassword: this.state.password ? false : true,
    }, this.traySubmitData)
  }
  traySubmitData() {
    if (!this.state.neadUsername && !this.state.neadPassword) {
      // sent data
      console.log('data is sent');

      this.props.newUser(1, this.state.name)

      this.setState({ ...this.initialText })
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='name'
          type='text'
          onChange={this.onChange}
          value={this.state.name} />
        <input
          name='password'
          type='password'
          onChange={this.onChange}
          value={this.state.password} />
        <br />
        <input
          type='submit'
          value='login' />
      </form>
    )
  }
}

export default connect(null, {newUser})(index)