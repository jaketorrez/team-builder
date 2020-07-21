import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import { Form } from "./components/Form";

function App() {
  const [ teamMembers, setTeamMembers ] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Team Members of the Sam Fam</h1>
      </header>

      <main className="app-content">
    <List />
      </main>
    </div>
  );
}

export default App;
