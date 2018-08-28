import React from 'react'
import './CharactersPage.css'
import * as characterData from '../data/CharacterData'

export default class CharactersPage extends React.Component {
  render() {
    const name = this.props.match.params.name
    const data = characterData.characters[name]
    return (
      <div className="characters">
        <h1>{name}</h1>
        <p>{data.description}</p>
      </div>
    )
  }
}