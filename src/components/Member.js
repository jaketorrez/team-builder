import React from "react";

const Member = props => {
    const { name } = props;

    return (
        <div className="member">
                <h4>{ name }</h4>
        </div>
    );
}

export default Member;