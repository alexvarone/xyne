import React, { Component } from "react";
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

      <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
      );
  }
}

export default App;
