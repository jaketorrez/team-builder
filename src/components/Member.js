import React from "react";

const Member = props => {
    const { id, name } = props;

    return (
        <div className="member">
                            <div>{ id }</div>
                <h4>{ name }</h4>
        </div>
    );
}

export default Member;