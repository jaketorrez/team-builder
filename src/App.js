import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Member from "./components/Member";

function App() {
  let memberList = [
    { id: uuid(), name: "Sam" },
    { id: uuid(), name: "Jake" },
    { id: uuid(), name: "Ava" },
    { id: uuid(), name: "Orlando" }
];

// State variables
  const [ teamMembers, setTeamMembers ] = useState(memberList);
  const [ memberName, setMemberName ] = useState("");

  const handleChange = event => {
    let value = event.target.value;
    setMemberName(value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newMember = { id: uuid(), name: memberName };
    memberList.push(newMember);
    setTeamMembers(memberList);
    setMemberName("");
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members of the Sam Fam</h1>
      </header>

      <main className="app-content">
        <section className="member-list">
          { teamMembers.map(member => {
            return (
              <Member 
                key={ member.id }
                name={ member.name } />
              ); // End map return
            }) // End map
          }
          <hr />
        </section>

        <section className="form">
          <form onSubmit={ event => handleSubmit(event) } >
            <h2>Add a New Team Member</h2>
              <label>
                Member Name:
                  <input type="text"
                  onChange = { event => handleChange(event) } />
              </label> <br />
            <button>Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
