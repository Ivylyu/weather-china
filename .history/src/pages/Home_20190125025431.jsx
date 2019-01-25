import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import Maps from './Maps';
import Charts from './Charts';
import '../App.css';


class Home extends Component {
    
    render() {
        var {
            Router,
            Route,
            IndexRoute,
            IndexLink,
            Link
        } = ReactRouter;
        return (
            <div>
            <h1>Weather in China</h1>
            <ul className="header">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/Maps" activeClassName="active">Maps</Link></li>
            <li><Link to="/Charts" activeClassName="active">Charts</Link></li>
            </ul>
            <div className="content">
            {this.props.children}
            </div>
            </div>
        );
    }
}
export default Home;