import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header">Halloj</h1>
        <p>
          JS lesson <code>src/App.js</code> and save to reload.
          <MyButton title="Tryck här" />
          <MyButton title="eller här" />
          <MyButton title="eller varför inte här" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
        </a>
      </header>
    </div>
  );
}

export default App;
