import React from "react";

const Member = props => {
    const { id, name } = props;

    return (
        <div className="member">
                            <div>{ id }</div>
                <h2>{ name }</h2>
        </div>
    );
}

export default Member;