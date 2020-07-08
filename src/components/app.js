import React, { Component } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Register />
      </div>
    );
  }
}
