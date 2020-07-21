import React from "react";

const List = props => {
    let memberList = [
        { id: 1, name: "Sam" },
        { id: 2, name: "Jake" },
        { id: 3, name: "Ava" },
        { id: 4, name: "Orlando" }
    ];

      return (
        memberList.map(member => {
            return (
                <>
                <div>{ member.id }</div>
                <h2>{ member.name }</h2>
                </>
            );
        })
      );
}
export default List;