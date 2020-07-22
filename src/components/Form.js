import React, { useState } from "react";

const Form = props => {
    const [ name, setName ] = useState("");
    const changeHandler = event => {
        let value = event.target.value;
        setName(value);
    }

    return (
        <section className="form">
            <h2>Add a New Team Member</h2>
            <form>
                <label>
                    Member Name:
                    <input type="text"
                    onChange = { event => changeHandler(event) } />
                </label> <br />
                <input type="submit" />
            </form>
        </section>

    );
}

export default Form;