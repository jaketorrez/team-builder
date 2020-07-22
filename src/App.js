import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from "./components/Member";

function App() {
  let memberList = [
    { id: 1, name: "Sam" },
    { id: 2, name: "Jake" },
    { id: 3, name: "Ava" },
    { id: 4, name: "Orlando" }
];

// State variables
  const [ teamMembers, setTeamMembers ] = useState(memberList);
  const [ memberName, setMemberName ] = useState("");

  const handleChange = event => {
    let value = event.target.value;
    setMemberName(value);
    console.log(memberName);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newMember = {
      
    }
    memberList.push(newMember);
    setTeamMembers(memberList);
    console.log(teamMembers);
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
                id={ member.id }
                name={ member.name } />
              ); // End map return
            }) // End map
          }
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
