import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from "uuid";
import FormData from "./components/Form";
import List from "./components/List";

function App() {
  const initialValue = { id: "", name: "", email: "", role: "" };
  let memberList = [
    { id: uuid(), name: "Sam", email: "sam@sam.com", role: "TL" },
    { id: uuid(), name: "Jake", email: "jake@jake.com", role: "Student" },
    { id: uuid(), name: "Ava", email: "ava@ava.com", role: "Student" },
    { id: uuid(), name: "Orlando", email: "orlando@orlando.com", role: "Student" }
];

// State variables
  const [ teamMembers, setTeamMembers ] = useState(memberList);
  const [ newMember, setNewMember ] = useState(initialValue);

  const handleChange = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setNewMember({ ...newMember, [inputName]: inputValue });
  }

  const handleSubmit = event => {
    event.preventDefault();
    memberList.push(newMember);
    setTeamMembers(memberList);
    setNewMember(initialValue);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members of the Sam Fam</h1>
      </header>

      <main className="app-content">
        <section className="member-list">
          <List 
          memberList={ teamMembers } />
          <hr />
        </section>

        <section className="form">
          <FormData 
          newMember={ newMember }
          handleChange={ handleChange} 
          handleSubmit={ handleSubmit } />
        </section>
      </main>
    </div>
  );
}

export default App;
