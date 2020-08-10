import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
    console.log('constructor', this)
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      console.log('response', response)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Mock Helpcue</h1>
      </div>
    );
  }
}

export default App;
