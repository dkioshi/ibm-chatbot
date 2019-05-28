
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import axios from 'axios';



class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    const url = 'http://localhost:4000/message/'
    axios
      .post(url, {newMessage})
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="IBM Assistant"
          subtitle="How can I help you?"
        />
      </div>
    );
  } 
}

export default App;