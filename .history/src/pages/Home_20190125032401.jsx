import React, { Component } from "react";
import { IndexLink, Link } from "react-router";
import './App.css';

class Home extends Component {
  render() {
    return (
        <div>
        <h1>Weather in China</h1>
        <ul className="header">
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><Link to="/Maps" activeClassName="active">Staff</Link></li>
        <li><Link to="/Charts" activeClassName="active">Contact</Link></li>
        </ul>
        {/* <div className="content">
        {this.props.children}
        </div> */}
        </div>
    );
  }
}
export default Home;
