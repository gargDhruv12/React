import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  // d = "dhruv";
  render() {
    return (
      <div>
        {/* learning class based components {this.d} */}
        <Navbar/>
        <News/>
      </div>
    )
  }
}

