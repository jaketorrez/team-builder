import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import Form from "./components/Form";

function App() {
  let memberList = [
    { id: 1, name: "Sam" },
    { id: 2, name: "Jake" },
    { id: 3, name: "Ava" },
    { id: 4, name: "Orlando" }
];
  const [ teamMembers, setTeamMembers ] = useState(memberList);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Team Members of the Sam Fam</h1>
      </header>

      <main className="app-content">
        <>
    <List list={ memberList } />
    </>

    <>
    <Form />
    </>
      </main>
    </div>
  );
}

export default App;
