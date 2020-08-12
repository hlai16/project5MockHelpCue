import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      queues: [],
      userAsk: '',
      clickHelped: false,
      clickStop: false
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      console.log('response', response.val())

      const data = response.val();

      const helpcueUpdated = [];

      for (let propertyName in data) {
        const waitingForHelp = {
          id: propertyName,
          question: data[propertyName]
        }
        helpcueUpdated.push(waitingForHelp)
      }
      this.setState({
        queues: helpcueUpdated
      })
    })
  }

  getUserInput = (event) => {
    this.setState({
      userAsk: event.target.value
    })
  }

  submitQuestion = (event) => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userAsk)

    this.setState({
      userAsk: ''
    })
  }

  deleteQuestion = (cueID) => {
    const dbRef = firebase.database().ref();
    dbRef.child(cueID).remove()
  }

  // Took me ages to solve this part.... I miss jquery....

  toggleGreen = (e) => {
    e.preventDefault();
    this.setState({
      clickHelped: e.target.value,
      clickHelped: !this.state.clickHelped
    })
  }

  toggleRed(e) {
    e.preventDefault();
    this.setState({
      clickStop: !this.state.clickStop
    })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="h1">Mock Helpcue</h1>
          <form action="submit">
            <div className="textBar">
              <label htmlFor="question" className="sr-only">Please type your question here</label>
              <textarea onChange={this.getUserInput} value={this.state.userAsk} id="question" row="20" placeholder="Type your question here" />
            </div>
            <button onClick={this.submitQuestion}>Help!! 😣</button>
          </form>
          <ul>
            {
              this.state.queues.map((waitingForHelp) => {
                return (
                  <li key={waitingForHelp.id}>
                    <div className="questionBox">
                      <div className="actualQuestion">
                        <p>{waitingForHelp.question}</p>
                      </div>
                      <button onClick={() => this.deleteQuestion(waitingForHelp.id)}>🚮</button>
                      <button className={this.state.clickHelped ? "button green" : "button"} onClick={e => this.toggleGreen(e)} key={waitingForHelp.id}>🦸‍♂️</button>
                      <button className={this.state.clickStop ? "button red" : "button"} onClick={e => this.toggleRed(e)}>⛔</button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <footer>
          <div className="wrapper">
            <p>&copy; Copyright 2020 Gloria Lai Juno College Project5</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
