import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: false
    }

    this.logUser = this.logUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
  }

  logUser() {
    this.setState({ user: true })
  }

  logoutUser() {
    this.setState({ user: false })
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} logUser={this.logUser} logoutUser={this.logoutUser}/>
        
      </div>
    );
  }
}

export default App;
