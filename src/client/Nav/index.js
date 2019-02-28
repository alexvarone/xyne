import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css"


class Nav extends Component {
    constructor(props) {
        super(props);
    }




    render() {

        return (
         <nav className="nav container no-padding">

        <div className="col-md-4 no-padding">
         <Router>
         <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/directory/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
        </Router>

        </div>
        <div className="col-md-4 no-padding logo-box">
           <div className='logo'>              XYNE
            </div>
        </div>
        <div className="col-md-4 nav-box-3">
          <button className="sign-up">
            SIGN UP
          </button>
        </div>
      </nav>
        );
    }
}

export default Nav;
