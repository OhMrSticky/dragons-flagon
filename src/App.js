import React from 'react'
import logo from './assets/dragon.png'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Dragon's Flagon</h1>
        </header>
      </div>
    );
  }
}
