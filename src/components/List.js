import React from "react";
import Member from "./Member";

const List = props => {
    const { memberList } = props;

    return (
        <div>
                      { memberList.map(member => {
            return (
              <Member 
                key={ member.id }
                member={ member } />
              ); // End map return
            }) // End map and map callback
          }
        </div>
    );
}

export default List;