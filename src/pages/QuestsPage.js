import React from 'react'
import Quest from '../components/Quest'

export default class QuestsPage extends React.Component {
  render() {
    return (
      <div className="page_container">
        <h1>Quests</h1>
        <Quest/>
      </div>
    )
  }
}