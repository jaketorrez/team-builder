import React from "react";

const Member = props => {
    const { member } = props;

    return (
        <div className="member">
                <h4>{ member.name }: { member.role }</h4>
                <p>Email: { member.email }</p>
        </div>
    );
}

export default Member;