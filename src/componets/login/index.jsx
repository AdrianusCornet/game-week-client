import React, { Component } from 'react'

export default class index extends Component {
  initialState = {
    name: '',
    password: '',
  }
  state = this.initialState

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault()
    // sent data
    console.log(this.state)
    this.setState(this.initialState)
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
