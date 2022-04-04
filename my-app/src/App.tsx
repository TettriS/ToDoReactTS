import React from 'react';
import './App.css';
import Header from './Components/header';
import Body from './Components/body';

function App() {
  return (
    <div className="App">
      <Header className="App-header" onlyLogo={'only-logo'}/>
      <Body className="App-body"/>
    </div>
  );
}

export default App;
