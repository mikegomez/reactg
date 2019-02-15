import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import '../src/App1.css';


class App extends Component {
  render() {
    return (
      <div className="app1">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
