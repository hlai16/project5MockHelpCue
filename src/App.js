import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      queues: [],
      userAsk: "",
      clickStop: false
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
          clickHelped: false
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

  // Took me ages to solve this part.... I miss jquery....


  toggleGreen = (cueID, cueState) => {
    const queueCopy = [...this.state.queues];
    const updatedCopy = queueCopy.map((question) => {
      return question.id === cueID
        ? question.clickHelped = !question.cueState && 
        question.question
        : question.clickHelped === question.cueState && 
        question.question
    })
    this.setState({
      queues: updatedCopy
    })
    console.log('updatedCopy', updatedCopy)
  }


  toggleRed() {
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
                      <button className={() => this.toggleGreen(question.clickHelped) ? "button green" : "button"} onClick={() => this.toggleGreen(question.id)}><span>🦸‍♂️</span></button>
                      <button className={this.state.clickStop ? "button red" : "button"} onClick={() => this.toggleRed()}><span>⛔</span></button>
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
