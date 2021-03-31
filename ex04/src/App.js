import React, { Component } from 'react';

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month')
  }
  getLocalStorage = () => {
    const myLocalStorageData = localStorage.getItem('Arena');
    console.log(myLocalStorageData);
  }
  render() {
    return <div className="App">
      <button type='button' onClick={this.setLocalStorage}
      >Set Local</button>
      <button type='button' onClick={this.getLocalStorage}
      >Get Local</button>
      </div>
  }
}

export default App;