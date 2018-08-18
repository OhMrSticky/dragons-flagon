import React from 'react'
import logo from '../assets/dragon.png'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="title">The Dragon's Flagon</p>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/quests'>Quests</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}