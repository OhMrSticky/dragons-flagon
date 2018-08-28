import React from 'react'
import logo from '../assets/dragon.png'
import beer from '../assets/beer.png'
import './Header.css'
import { Link } from 'react-router-dom'
import * as appData from '../data/AppData'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownActive: false };
    this.dropdownActive = this.dropdownActive.bind(this);
  }
  dropdownActive() {
    this.setState({dropdownActive: !this.state.dropdownActive})
  }
  render() {
    return (
      <header className="header">
        <div className="section">
          <img src={logo} className="app-logo" alt="dragon logo" />
          <span className="page-title">The Dragon's Flagon</span>
          <img src={beer} className="app-logo" alt="beer" />
        </div>
        <nav className="section">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/quests'>Quests</Link></li>
            <li
              onMouseEnter={this.dropdownActive} 
              onMouseLeave={this.dropdownActive}>
              Characters
              <ul className={`dropdown ${this.state.dropdownActive ? 'active' : ''}`}>
                {
                  appData.characters.map((character, index) => {
                    const link = `/characters/${character}`
                    return (
                      <li key={index}><Link to={link}>{character}</Link></li>
                    )
                  })
                }
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}