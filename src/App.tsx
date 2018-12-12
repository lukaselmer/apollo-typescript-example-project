import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListIssues from "./components/ListIssues";
import { AddCommentButton } from "./components/AddCommentButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ListIssues owner="apollographql" project="react-apollo" />
        <AddCommentButton subjectId="MDU6SXNzdWUzODg2NzU5MzA=" />
      </div>
    );
  }
}

export default App;
