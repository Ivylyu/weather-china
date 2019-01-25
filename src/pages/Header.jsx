import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Weather in China</h1>
        <nav>
          <ul className="header">
            <li>
              <Link id="1" to="/" className="active" >
                Home
              </Link>
            </li>
            <li>
              <Link id="2" to="/Maps" className="active">
                Maps
              </Link>
            </li>
            <li>
              <Link id="3" to="/Charts" className="active">
                Charts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
