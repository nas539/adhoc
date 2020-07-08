import React, { Component } from 'react';
import Home from './pages/home';
import Login from './pages/login';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Login />
      </div>
    );
  }
}
