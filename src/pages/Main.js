import React from 'react'
import './Main.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import QuestsPage from './QuestsPage'

export default class Main extends React.Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/quests' component={QuestsPage} />
        </Switch>
      </main>
    )
  }
}