import React, { Component } from "react";
import { Router, Route, IndexRoute, IndexLink, Link } from "react-router";
import Home from './Home';
import Maps from './Maps';
import Charts from "./Charts";


export default Storage = React.createClass({
    render:function () {
    return(
        <div>
        <h1>Weather in China</h1>
        <ul className="header">
        <li><IndexLink to={Home} activeClassName="active">Home</IndexLink></li>
        <li><Link to={Maps} activeClassName="active">Staff</Link></li>
        <li><Link to={Charts} activeClassName="active">Contact</Link></li>
        </ul>
        <div className="content">
        {this.props.children}
        </div>
        </div>
    )}
});