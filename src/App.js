import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      queues: [],
      userAsk: ''
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
      console.log('helpcueUpdated', helpcueUpdated)

      this.setState({
        questions: helpcueUpdated
      })
    })
  }

  getUserInput = (event) => {
    this.setState({
      userAsk: event.target.value
    })
  }

  submit = (event) => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userAsk)

    this.setState({
      userAsk: ''
    })
  }

  deleteQuestion = (cueID) => {
    console.log('deleted', cueID)

    const dbRef = firebase.database().ref();
    dbRef.child(cueID).remove()
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
            <button onClick={this.submit}>Help Please 😣</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
