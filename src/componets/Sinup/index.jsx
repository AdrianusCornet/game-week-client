import React, { Component } from 'react'

export default class index extends Component {
  initialText = {
    name: '',
    password1: '',
    password2: '',
    neadUsername: false,
    neadPassword: false,
  }
  state = {
    ...this.initialText
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault()

    // pw1 = pw2
    this.setState({
      neadUsername: this.state.name ? false : true,
      neadPassword: (this.state.password1 && this.state.password2) && (this.state.password1 === this.state.password2) ? false : true,
    }, this.traySubmitData)
  }
  traySubmitData() {
    if (!this.state.neadUsername && !this.state.neadPassword) {
      // sent data
      console.log('data is sent');

      this.setState({ ...this.initialText })

      // return to home page
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
          name='password1'
          type='password'
          onChange={this.onChange}
          value={this.state.password1} />
        <input
          name='password2'
          type='password'
          onChange={this.onChange}
          value={this.state.password2} />
        <br />
        <input
          type='submit'
          value='sing up' />
      </form>
    )
  }
}
