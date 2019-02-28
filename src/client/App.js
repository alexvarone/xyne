import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Main from './Main';

export default class App extends Component {
  state = { username: null };

  // componentDidMount() {
  //   fetch('/api/getUsername')
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: "Nouri" }));
  // }

  render() {
    // const { username } = this.state;
    return (
      <div>
        <Main/>
      </div>
    );
  }
}
