import React, { Component } from "react";
import { Router, Route, IndexRoute, IndexLink, Link } from "react-router";
import Maps from "./Maps";
import Charts from "./Charts";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div className="login">
        <form className="loginForm">
          <input placeholder="s001" />
          <input placeholder="123456789" />
          <div className="test">
            <input type="checkbox" />
            <label>Remember me</label>
            <div className="aStyle">
              <a href="">Forget Password</a>
            </div>
          </div>
          <button>sign in</button>
        </form>
      </div>
    );
  }
}
export default Home;
