import React, { Component } from 'react';
import firebase from './firebase.js';
import ToggleGreen from './ToggleGreen';
import ToggleRed from './ToggleRed';
import LikeButton from './LikeButton';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      queues: [],
      userAsk: "",
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const data = response.val();

      const helpcueUpdated = [];

      for (let propertyName in data) {
        const waitingForHelp = {
          id: propertyName,
          question: data[propertyName],
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
      userAsk: ""
    })
  }

  deleteQuestion = (cueID) => {
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
            <button onClick={this.submitQuestion}>Help!! <span>😣</span></button>
          </form>
          <ul>
            {
              this.state.queues.map((question) => {
                return (
                  <li key={question.id}>
                    <div className="questionBox">
                      <div className="actualQuestion">
                        <p>{question.question}</p>
                      </div>
                      <button onClick={() => this.deleteQuestion(question.id)}><span>🚮</span></button>
                      <ToggleGreen />
                      <ToggleRed />
                      <LikeButton />
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
