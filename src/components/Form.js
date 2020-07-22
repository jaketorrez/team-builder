import React from "react";

const FormData = props => {
    const { 
      newMember,
        handleChange,
        handleSubmit
    } = props;

    return (
        <form onSubmit={ event => handleSubmit(event) } >
        <h2>Add a New Team Member</h2>
          <label>
            Member Name:
              <input type="text"
              name="name"
              value={ newMember.name }
              onChange = { event => handleChange(event) } />
          </label> <br />

          <label>
            Member Email:
              <input type="text"
              name="email"
              value={ newMember.email }
              onChange = { event => handleChange(event) } />
          </label> <br />

          <label>
            Team Role:
              <input type="text"
              name="role"
              value={ newMember.role }
              onChange = { event => handleChange(event) } />
          </label> <br />

      <button>Submit!</button>
      </form>
    );
}

export default FormData;