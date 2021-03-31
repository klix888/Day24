import React, { Component } from 'react';

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }
  getMyStorage = () => {
    const myCookieDate = document.cookie.split('=')[1];
    const myLocalStorage = localStorage.getItem('Paragon');
    const mySessionStorage = sessionStorage.getItem('frontend');
    console.log(myCookieDate,myLocalStorage,mySessionStorage);
  }
 
  render() {
    return <div className="App">
      <button type='button' onClick={this.setMyStorage}>Set Storage</button>
      <button type='button' onClick={this.getMyStorage}>Get Storage</button>
      </div>
    }
}

export default App;