import React, { Component } from 'react';
import Navigation from './pages/navMenu';

export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
            <Navigation />
      </div>
    );
  }
}
