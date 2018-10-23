import React, { Component } from 'react';
import Homepage from './components/homepage'
import Navigation from './components/navigation'
import Worklinks from './components/worklinks'
import Welcome from './components/welcome'
import './stylesheets/navigationcss.css'




class App extends Component {
  render() {
    return (
      <div id='mainDiv'>

        <Navigation />
        <Welcome />
        <Worklinks />

      </div>
    );
  }
}

export default App;
