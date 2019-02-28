import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.openNavLog = this.openNavLog.bind(this);
    this.closeNavLog = this.closeNavLog.bind(this);
    this.openNavSign = this.openNavSign.bind(this);
    this.closeNavSign = this.closeNavSign.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  openNavSign() {
    document.getElementById('sideNavigationSign').style.width = '300px';
    document.getElementById('sideNavigationSign').style.display = 'block';
    document.getElementById('sideNavigationLog').style.display = 'none';
    document.getElementById('main').style.marginLeft = '300px';
  }

closeNavSign()  {
  document.getElementById('sideNavigationSign').style.width = '0px';
  document.getElementById('main').style.marginLeft = 'auto';
}


openNavLog()  {
  document.getElementById('sideNavigationLog').style.width = '300px';
  document.getElementById('sideNavigationLog').style.display = 'block';
  document.getElementById('sideNavigationSign').style.display = 'none';
  document.getElementById('main').style.marginLeft = '300px';
}

closeNavLog()  {
document.getElementById('sideNavigationLog').style.width = '0px';
document.getElementById('main').style.marginLeft = 'auto';
}

  handleChange(event) {
    this.setState({type: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + ' with the email of ' + this.state.email);
    event.preventDefault();
  }

  handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
  }




    render() {


        return (
          <div>

          {/*Signin Form*/}
          <div id="sideNavigationSign" className="sidenav">
              <a href="javascript:void(0)" className="closebtn" onClick={this.closeNavSign}>&times;</a>
              <div className="sign-up-box">
              <h2 className="get-started">SIGN UP</h2>
              <h3 className="get-started-sub">Get early access to XYNE.</h3>
              </div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} />
                  <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                  <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                </label>
            <input type="submit" value="Submit" />
          </form>
          </div>

            {/*Log-in Form*/}
            <div id="sideNavigationLog" className="sidenav">
              <a href="javascript:void(0)" className="closebtn" onClick={this.closeNavLog}>&times;</a>
              <div className="sign-up-box">
              <h2 className="get-started">LOG IN</h2>
              <h3 className="get-started-sub">Don't have an account? <a href="javascript:void(0)" id="signup-link" onClick={this.openNavSign}>Sign Up</a></h3>
              </div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input name="type" type="radio" value={this.state.type} onChange={this.handleChange} />
                  <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                  <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                </label>
            <input type="submit" value="Log In" />
          </form>
          </div>

          <div id="main" className="container grid-hero">
            <div className="row hero-row">
              <div className="col-md-9 main-hero no-padding">
                <div className="logo-hero">XYNE</div>
                <div className="hero-copy">
                Unique Opportunities for Unique Talent
                <p>
                Find the best emerging creatives that will work for your budget work.
                </p>

                </div>

                <div className="btn-group">
                  <button id="get-started" onClick={this.openNavSign}>
                    Get Started
                  </button>

                  <button onClick={this.openNavLog}>
                    Log In
                  </button>
                </div>

              </div>
              <div className="col-md-3 side-hero no-padding">
                <div className="side-hero-item side-hero1" >
                  <div className="hover-content">@zevbanks</div>
                </div>
                 <div className="side-hero-item side-hero2">
                  <div className="hover-content">@zoeviola</div>
                 </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-3 bottom-hero bottom-hero1 no-padding">
              <div className="hover-content">@marcharrismiller</div>
              </div>
              <div className="col-md-3  bottom-hero bottom-hero2 no-padding">
              <div className="hover-content">@carinaallen</div>
              </div>
              <div className="col-md-3 bottom-hero bottom-hero3 no-padding">
              <div className="hover-content">@sarahakrav</div>
              </div>
              <div className="col-md-3 bottom-hero bottom-hero4 no-padding">
              <div className="hover-content">@shickyshan</div>
              </div>

            </div>
          </div>
          </div>
        );
    }
}

export default Landing;
