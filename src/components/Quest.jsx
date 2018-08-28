import React from 'react'
import './Quest.css'
import * as questdata from '../data/QuestData'

export default class Quest extends React.Component {
  render() {
    return (
      questdata.quests.map( (quest, index) => {
        return (
          <div className="quest" key={index}>
            <h2>{quest.title}</h2>
            <span>{quest.description}</span>
          </div>
        )
      })
    )
  }
}