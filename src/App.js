import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/projects';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;