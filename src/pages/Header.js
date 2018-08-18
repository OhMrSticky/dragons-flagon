import React from 'react'
import logo from '../assets/dragon.png'
import beer from '../assets/beer.png'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="section">
          <img src={logo} className="app-logo" alt="dragon logo" />
          <span className="title">The Dragon's Flagon</span>
          <img src={beer} className="app-logo" alt="beer" />
        </div>
        <nav className="section">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/quests'>Quests</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}