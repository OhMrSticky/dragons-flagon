import React from 'react'
import './Main.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import QuestsPage from './QuestsPage'
import CharactersPage from './CharactersPage'

export default class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/quests' component={QuestsPage} />
          <Route path='/characters/:name' component={CharactersPage} />
        </Switch>
      </div>
    )
  }
}