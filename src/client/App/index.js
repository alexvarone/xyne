import React, { Component } from "react";
import { FaRegFile, FaRegEnvelopeOpen, FaInstagram } from 'react-icons/fa';
import Nav from '../Nav';
import Landing from '../Landing';
import Profile from '../Profile';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    };
  }


  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 200;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });

};


  render() {
    return (
      <div>
 {/*       <div className={this.state.isTop ? 'nav-reg' : 'nav-scroll'} >
          <Nav {...this.state} />
        </div>*/}
      {/*<Profile />*/}
      <Landing/>
      </div>
      );
  }
}

export default App;
