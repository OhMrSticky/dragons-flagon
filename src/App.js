import React from 'react'
import Header from './pages/Header'
import Main from './pages/Main'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
