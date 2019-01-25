import React, { Component } from 'react';
import Maps from 'Maps';
import Charts from 'Charts';
import import { Router, Route, Switch } from 'react-router';
import './App.css';

class App extends Component {
state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };
  render() {
    return (
      <div className="App">
            <div>
            <h1>Weather in China</h1>
            <ul className="header">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/staff" activeClassName="active">Staff</Link></li>
            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
            </ul>
            <div className="content">
            {this.props.children}
            </div>
            </div>
         <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
