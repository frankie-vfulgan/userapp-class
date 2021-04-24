import React from "react";
import UserItem from "./UserItem";

function UserList(props) {
    return (
        <div>
            {props.allUsers.map ((user) => (<UserItem user = {user} />))}
        </div>
    );
}

export default UserList;