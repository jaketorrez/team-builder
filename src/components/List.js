import React from "react";
import Member from "./Member";

const List = props => {
    const { list } = props;

      return (
          <section className="member-list">
            { list.map(member => {
                return (
                    <Member 
                    key={ member.id }
                    id={ member.id }
                    name={ member.name } />
                ); // End map return
            }) // End map
            }
             <hr />
          </section>

      ); // End List return
} // End List component

export default List;